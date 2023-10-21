"use client"
import React from "react";
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Footer from "@/components/Footer";
import SnackBar from "@/components/SnackBar";

const queryClient = new QueryClient();

const App = ({children}: {
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


export default App
