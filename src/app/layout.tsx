"use client"
import React from "react";
import './global.css'
import type {Metadata} from 'next'
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const metadata: Metadata = {
    title: 'Fast 24',
}


const RootLayout = ({children, snackbar}: {
    children: React.ReactNode,
    snackbar: React.ReactNode
}) => {
    return (
        <html>
            <body>
                <RecoilRoot>
                    <QueryClientProvider client={queryClient}>
                        {children}
                        {/*{snackbar}*/}
                    </QueryClientProvider>
                </RecoilRoot>
            </body>
        </html>
    )
}


export default RootLayout
