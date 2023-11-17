"use client"
import Navbar from "@/components/NavBar";
import React, {useEffect} from "react";
import SearchModal from "@/components/SearchModal";
import AppShellContainer from "@/components/AppShellContainer";
import {usePathname} from "next/navigation";
import BrandsBanner from "@/components/BrandsBanner";
import BrandsBMW from "@/components/BrandsBMW";
import BrandsFerrari from "@/components/BrandsFerrari";
import BrandsKoenigsegg from "@/components/BrandsKoenigsegg";
import BrandsLambo from "@/components/BrandsLambo";
import {removeAuthHeader, setAuthHeader} from "@/services/API";
import {getProfile} from "@/services/user.service";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "@/state/atoms/user.atom";
import {authState} from "@/state/atoms/auth.atom";
import {loadToken} from "@/state/atoms/loadToken.atom";


const AppSkeleton = ({children}: {
    children: React.ReactNode,
}) => {
    const pathname = usePathname()
    const setUser = useSetRecoilState(userState)
    const setLoadToken = useSetRecoilState(loadToken)
    const auth = useRecoilValue(authState)

    useEffect(() => {
        setUser((prev) => ({...prev, isLoading: true}))
        if (auth.isAuthenticated) {
            setAuthHeader(auth.token)
            setLoadToken(true)
            getProfile().then((res) => {
                setUser((prev) => ({...prev, data: res, isLoading: false}))
            }).catch((e) => {
                removeAuthHeader()
                setUser((prev) => ({...prev, isLoading: false, data: null}))
            })
        } else {
            removeAuthHeader()
            setUser((prev) => ({...prev, isLoading: false, data: null}))
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
                            <BrandsBanner/>
                            <BrandsBMW/>
                            <BrandsFerrari/>
                            <BrandsKoenigsegg/>
                            <BrandsLambo/>
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

export default AppSkeleton