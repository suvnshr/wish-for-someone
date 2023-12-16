"use client";

import theme from '@/mui/theme';
import { Link, Paper, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Paper elevation={0} sx={{ position: "fixed", textAlign: "center", width: "100vw", py: 1, bottom: "0" }}>
            <Typography variant="subtitle1" sx={{ color: "#eaeaea" }}>
                Created by <a target='_blank' style={{color: "#bc13fe", textDecoration: "none"}} href="https://suvanshrana.com">Suvansh</a> with magic 🪄
            </Typography>
        </Paper>
    )
}

export default Footer