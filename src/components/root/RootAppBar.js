import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import { AutoFixHigh, Star } from '@mui/icons-material';
import CreateWishDialog from '../create/CreateWishDialog';




function RootAppBar(props) {

  const [createDialogOpen, setCreateDialogOpen] = React.useState(false);

  const toggleCreateDialog = () => {
    setCreateDialogOpen(!createDialogOpen);
  };


  return (
    <Box sx={{ display: 'flex', mb: 12 }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            className="neon-text"
            sx={{ flexGrow: 1 }}
          >
            Wish for someone!
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Fab variant="extended" size="large" color="primary" onClick={toggleCreateDialog}>
              <AutoFixHigh sx={{ mr: 1 }} />
              <Box sx={{ mt: 0.5 }}>
                Wish
              </Box>
            </Fab>
          </Box>
        </Toolbar>
      </AppBar>

      <CreateWishDialog open={createDialogOpen} closeCreateDialog={toggleCreateDialog} />

    {/* Only visible in mobiles */}
      <Fab
        onClick={toggleCreateDialog}
        sx={{
          display: {
            xs: "block", sm: "none"
          },

          position: "absolute",
          bottom: "40px",
          right: "10px"
        }} color="primary">
        <AutoFixHigh sx={{ mt: 1 }} />
      </Fab>
    </Box>
  );
}

export default RootAppBar;
