import { Box, LinearProgress, Grid, Typography } from '@mui/material'
import React from 'react'

function Loader() {
    return (
        <Grid container justifyContent="center" sx={{px: 2}}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Loading wishes...
                </Typography>
                <LinearProgress />
            </Grid>
        </Grid>
    )
}

export default Loader