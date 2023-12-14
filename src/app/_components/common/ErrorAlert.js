import { Alert, AlertTitle, Grid } from '@mui/material'
import React from 'react'

function ErrorAlert({ error }) {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={3}>
                <Alert severity="warning">
                    <AlertTitle>Something went wrong</AlertTitle>
                    {error}
                </Alert>
            </Grid>
        </Grid>
    )
}

export default ErrorAlert