import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SupaBaseServer from '@/supabase/server';
import { Alert, CircularProgress } from '@mui/material';


const WISH_MAX_LENGTH = 100;
const NAME_MAX_LENGTH = 30;

export default function CreateWishDialog({ open, closeCreateDialog }) {

    const wishRef = React.useRef(null);

    // Wish text
    const [wish, setWish] = React.useState("");
    // Author text
    const [author, setAuthor] = React.useState("");

    // Error while saving?
    const [errorWhileSave, setErrorWhileSave] = React.useState(false);

    // Save in progress?
    const [saveInProgress, setSaveInProgress] = React.useState(false)

    // Focus the wish input when modal opens
    React.useEffect(() => {
        if (open) {
            const timeoutId = setTimeout(() => {
                if (wishRef.current) {
                    wishRef.current.focus();
                }
            }, 100); // Adjust the delay as needed if focusing does not work immediately
            return () => clearTimeout(timeoutId);
        }
    }, [open]);


    const wishValidation = wish && wish.length <= WISH_MAX_LENGTH;
    const authorValidation = author && author.length <= NAME_MAX_LENGTH;


    // Handle creation  of a wish
    const onSubmit = async () => {

        setSaveInProgress(true);

        // Wish and author need to be less than the max length allowed
        if (wishValidation && authorValidation) {
            const supabase = new SupaBaseServer();

            // Create the wish in server
            const { data: saved, error } = await supabase.addAWish(wish, author);

            if (saved) {
                // Reset any errors from before
                setErrorWhileSave(false);

                // Close the creation dialog, when save is done
                closeCreateDialog();
            }

            else {
                // Error occured while saving
                setErrorWhileSave(true)
            }

        }

        setSaveInProgress(false);

    }




    return (
        <Dialog maxWidth="xs" fullWidth open={open} onClose={closeCreateDialog}>
            <DialogTitle>Create a wish</DialogTitle>
            <DialogContent>

                {/* Show this alert whenever there's a error that occured while saving the data to server */}
                {errorWhileSave ? <Alert sx={{ mb: 1 }} severity="warning">Error while creating your wish :(</Alert>
                    : null}

                <TextField
                    sx={{ mt: 1, mb: 1 }}
                    autoFocus
                    inputRef={wishRef}
                    id="wish"
                    label="Wish"
                    onKeyUp={ev => setWish(ev.target.value)}
                    placeholder="I wish that people affected by the war get well soon ❤️"
                    type="textarea"
                    fullWidth
                    multiline
                    error={wish.length > WISH_MAX_LENGTH}
                    maxlength={WISH_MAX_LENGTH.toString()}
                    helperText={`${wish.length}/${WISH_MAX_LENGTH}`}
                />

                <TextField
                    sx={{ mt: 1 }}
                    id="author"
                    label="Your name"
                    type="textarea"
                    fullWidth
                    error={author.length > NAME_MAX_LENGTH}
                    maxlength={NAME_MAX_LENGTH.toString()}
                    onKeyUp={ev => setAuthor(ev.target.value)}
                    helperText={`${author.length}/${NAME_MAX_LENGTH}`}

                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeCreateDialog}>Cancel</Button>

                {saveInProgress ?
                    <CircularProgress disableShrink size="2rem" /> :
                    <Button disabled={!wishValidation || !authorValidation} variant="contained" onClick={onSubmit}>Add Wish</Button>}


            </DialogActions>
        </Dialog>

    );
}