"use client"
import Navbar from "@/components/NavBar";
import React, {useEffect} from "react";
import SearchModal from "@/components/SearchModal";
import AppShellContainer from "@/components/AppShellContainer";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {authState} from "@/state/atoms/auth.atom";
import {userState} from "@/state/atoms/user.atom";
import {getProfile} from "@/services/user.service";
import {removeAuthHeader, setAuthHeader} from "@/services/API";
import {usePathname} from "next/navigation";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const AppShellLayout = ({children, brands, brandsBMW, brandsFerrari, brandsKoenigsegg, brandsLambo}: {
    children: React.ReactNode,
    brands: React.ReactNode,
    brandsBMW: React.ReactNode,
    brandsFerrari: React.ReactNode,
    brandsKoenigsegg: React.ReactNode,
    brandsLambo: React.ReactNode
}) => {
    const auth = useRecoilValue(authState);
    const setUser = useSetRecoilState(userState)
    const pathname = usePathname()
    useEffect(() => {
        setUser((prev) => ({...prev, isLoading: true}))
        if (auth.isAuthenticated) {
            setAuthHeader(auth.token)
            getProfile().then((res) => {
                setUser((prev) => ({...prev, data: res, isLoading: false}))
            }).catch((e) => {
                console.log(e)
                setUser((prev) => ({...prev, isLoading: false}))
            })
        } else {
            setUser((prev) => ({...prev, isLoading: false}))
            removeAuthHeader()
        }
    }, [auth])
    return (
        <>
            <Navbar/>
            <SearchModal/>
            {
            pathname === '/' ? (
                <>
                    {children}
                    <AppShellContainer>
                        {brands}
                        <Box sx={{
                            margin: '1rem',
                            width: '100%'
                        }}>
                            <Divider sx={{
                                background: '#9e9e9e'
                            }}/>
                        </Box>
                        {brandsBMW}
                        <Box sx={{
                            margin: '1rem',
                            width: '100%'
                        }}>
                            <Divider sx={{
                                background: '#9e9e9e'
                            }}/>
                        </Box>
                        {brandsFerrari}
                        <Box sx={{
                            margin: '1rem',
                            width: '100%'
                        }}>
                            <Divider sx={{
                                background: '#9e9e9e'
                            }}/>
                        </Box>
                        {brandsKoenigsegg}
                        <Box sx={{
                            margin: '1rem',
                            width: '100%'
                        }}>
                            <Divider sx={{
                                background: '#9e9e9e'
                            }}/>
                        </Box>
                        {brandsLambo}
                    </AppShellContainer>
                </>

            ) : (
                <AppShellContainer>
                    {children}
                </AppShellContainer>
            )
        }

        </>

    )

}

export default AppShellLayout