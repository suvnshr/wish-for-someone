"use client";

import { Alert, AlertTitle, Box, Container, Grid } from '@mui/material';
import React from 'react'
import WishCard from './WishCard';
import useWishServer from '@/supabase/hooks';
import ErrorAlert from '../common/ErrorAlert';
import Loader from '../common/Loader';




function HomeClient() {

    const { data: wishes, loading, error } = useWishServer();

    if (loading) {
        return <Loader />
    } else if (error) {
        return <ErrorAlert error={error.message} />
    }

    return (
        <Box sx={{ px: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                {
                    (wishes ?? []).map(({ id, wish, author, likes }, index) =>
                        <Grid item xs={3} sm={3} md={3} key={`wish-card-${index}`} >
                            <WishCard id={id} wish={wish} author={author} likes={likes} />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default HomeClient;