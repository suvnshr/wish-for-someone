import { Alert, AlertTitle, Grid } from '@mui/material'
import React from 'react'

function ErrorAlert({ error }) {
    return (
        <Grid container justifyContent="center" sx={{px: 2}}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Alert severity="warning">
                    <AlertTitle>Something went wrong</AlertTitle>
                    {error}
                </Alert>
            </Grid>
        </Grid>
    )
}

export default ErrorAlert