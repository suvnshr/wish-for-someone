"use client";

import { ThemeProvider } from '@emotion/react';
import React from 'react'
import RootAppBar from './RootAppBar';
import theme from '../../mui/theme';
import WishOpProvider from '@/context/WishOpContext';


function RootClientComponent({ children }) {
    return (

        <ThemeProvider theme={theme}>
            <WishOpProvider>
                <RootAppBar />
                {children}
            </WishOpProvider>
        </ThemeProvider>
    )
}

export default RootClientComponent