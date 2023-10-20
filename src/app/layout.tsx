"use client"
import React from "react";
import './global.css'
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Footer from "@/components/Footer";
import SnackBar from "@/components/SnackBar";

const queryClient = new QueryClient();

const RootLayout = ({children}: {
    children: React.ReactNode,
}) => {
    return (
        <html>
            <body>
                <RecoilRoot>
                    <QueryClientProvider client={queryClient}>
                        <SnackBar/>
                        {children}
                        <Footer/>
                    </QueryClientProvider>
                </RecoilRoot>
            </body>
        </html>
    )
}


export default RootLayout
