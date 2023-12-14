"use client";

import { ThemeProvider } from '@emotion/react';
import React from 'react'
import RootAppBar from './RootAppBar';
import theme from '../../../mui/theme';


function RootClientComponent({ children }) {
    return (

        <ThemeProvider theme={theme}>
            <RootAppBar />
            {children}
        </ThemeProvider>
    )
}

export default RootClientComponent