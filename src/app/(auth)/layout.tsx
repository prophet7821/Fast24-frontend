"use client"
import React from 'react';
import {authState} from "@/state/atoms/auth.atom";
import {useRecoilValue} from "recoil";
import {usePathname, useRouter} from "next/navigation";
import AuthContainer from "@/components/AuthContainer";


const AuthLayout = ({children}: { children: React.ReactNode }) => {
    const auth = useRecoilValue(authState);
    const router = useRouter();
    const pathname = usePathname();
    // const [loading, setLoading] = React.useState<boolean>(true);

    // React.useEffect(() => {
    //     if (auth.isAuthenticated && pathname === '/signIn') {
    //         console.log('redirecting to home', auth.isAuthenticated, pathname)
    //         router.push('/')
    //     } else {
    //         setLoading(false)
    //     }
    // }, [pathname])

    // if (loading) {
    //     return null;
    // }


    return (
        <AuthContainer sx={{
            width:'100%',
        }}>
            {children}
        </AuthContainer>
    )
}

export default AuthLayout