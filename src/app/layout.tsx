"use client"
import React from "react";
import './global.css'
import type {Metadata} from 'next'
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SnackBar from "@/components/SnackBar";

const queryClient = new QueryClient();

export const metadata: Metadata = {
    title: 'Fast 24',
}


const RootLayout = ({children, footer, snackbar}: {
    children: React.ReactNode,
    snackbar: React.ReactNode,
    footer: React.ReactNode,
}) => {
    return (
        <html>
            <body>
                <RecoilRoot>
                    <QueryClientProvider client={queryClient}>
                        <SnackBar/>
                        {children}
                        {footer}
                    </QueryClientProvider>
                </RecoilRoot>
            </body>
        </html>
    )
}


export default RootLayout
