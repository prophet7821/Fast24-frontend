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
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AppShellLayout = ({children, brands}: {
    children: React.ReactNode,
    brands: React.ReactNode
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
                        <Box sx={{
                            margin: '1rem'
                        }}>
                            <Typography sx={{
                                color:'white',
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.5rem',
                                },
                                fontWeight: 'bold',
                            }} variant={"h5"}>Shop By Brands</Typography>
                        </Box>
                        {brands}
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