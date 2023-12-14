import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import SupaBaseServer from '@/supabase/server';
import LocalWishManager from '@/local-wish-manager/manager';


export default function WishCard({ id, wish, author, likes }) {

    const localWishManager = new LocalWishManager();

    const hasUserLiked = localWishManager.userHasLiked(id);

    const [like, setLike] = React.useState(hasUserLiked);

    const [likeCount, setLikeCount] = React.useState(likes);

    const supabase = new SupaBaseServer();

    const toggleLike = async () => {
        const { data: wish } = await supabase.toggleAWish(id, hasUserLiked ? "unlike" : "like");
        setLike(!hasUserLiked);
        setLikeCount(wish?.likes ?? likes)
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: "#ebe2ed" }}>
                    {wish}
                </Typography>

            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid container alignItems="center">
                    <Grid item>

                        <IconButton onClick={toggleLike} color="primary" aria-label="delete">
                            {
                                like ? <Favorite /> : <FavoriteBorder />}

                        </IconButton>
                    </Grid>
                    <Grid item>

                        <Typography variant="subtitle1">
                            {likeCount}
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container alignItems="center" justifyContent="right">
                    <Typography className="wish-author" variant="subtitle1" component="div" sx={{ mr: 1, color: "#e2c3ea" }}>
                        - {author}
                    </Typography>
                </Grid>

            </CardActions>
        </Card>
    );
}
