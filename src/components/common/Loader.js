import { Box, LinearProgress, Grid, Typography } from '@mui/material'
import React from 'react'

function Loader() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={3}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Loading wishes...
                </Typography>
                <LinearProgress />
            </Grid>
        </Grid>
    )
}

export default Loader