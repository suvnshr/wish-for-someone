"use client";

import { Alert, AlertTitle, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import WishCard from './WishCard';
import useWishServer from '@/supabase/hooks';
import ErrorAlert from '../common/ErrorAlert';
import Loader from '../common/Loader';
import { NightsStay, NightsStayOutlined } from '@mui/icons-material';




function HomeClient() {

    const { data: wishes, loading, error } = useWishServer();

    if (loading) {
        return <Loader />
    } else if (error) {
        return <ErrorAlert error={error.message} />
    }

    return (
        <Box sx={{ px: 4, mb: 10 }}>
            <Grid container spacing={4} justifyContent="center">
                {
                    (wishes ?? []).map(({ id, wish, author, likes }, index) =>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={`wish-card-${index}`} >
                            <WishCard id={id} wish={wish} author={author} likes={likes} />
                        </Grid>
                    )
                }

                {wishes.length === 0 ?
                    <Grid container sx={{ mt: 3 }} justifyContent="center" alignItems="center">

                        <NightsStayOutlined htmlColor="#7a7a7a" sx={{ mr: 1, mt: 1 }} />
                        <Typography sx={{ pt: 2 }} color="text.secondary" variant="h6">No wishes to list</Typography>


                    </Grid> : null}
            </Grid>
        </Box>
    )
}

export default HomeClient;