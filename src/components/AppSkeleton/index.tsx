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
import BrandsBanner from "@/components/BrandsBanner";
import BrandsBMW from "@/components/BrandsBMW";
import BrandsFerrari from "@/components/BrandsFerrari";
import BrandsKoenigsegg from "@/components/BrandsKoenigsegg";
import BrandsLambo from "@/components/BrandsLambo";

const AppSkeleton = ({children}: {
    children: React.ReactNode,
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
                removeAuthHeader()
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