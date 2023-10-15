"use client"
import React from "react";
import './global.css'
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
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
