"use client"
import {useRouter, useSearchParams} from "next/navigation";
import {useRecoilValue} from "recoil";
import {authState} from "@/state/atoms/auth.atom";
import {useEffect, useState} from "react";
import {createOrder} from "@/services/order.service";
import {loadToken} from "@/state/atoms/loadToken.atom";
import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';
import MDFGradientText from "@/components/MDFGradientText";
import MDFContainedBox from "@/components/MDFContainedBox";
import Button from "@mui/material/Button";

const OrderConfirm = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const auth = useRecoilValue(authState)
    const isTokenLoaded = useRecoilValue(loadToken)
    const paymentIntent = searchParams.get('payment_intent')
    const car = searchParams.get('car')
    const [order, setOrder] = useState(null)
    const redirect_status = searchParams.get('redirect_status')
    useEffect(() => {
        if (isTokenLoaded) {
            if (auth.isAuthenticated && paymentIntent && car && redirect_status === 'succeeded') {
                createOrder(car, paymentIntent).then((res) => {
                    setOrder(res)
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                router.push('/')
            }
        }
    }, [auth, isTokenLoaded]);


    return (
        <Box sx={{
            minHeight: '50vh',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
            <Box sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                p: '1rem',
                borderRadius: '0.5rem',
                width: {
                    xs: '80%',
                    md: '50%',
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '0.5rem'
                }}>
                    <Box sx={{
                        borderRadius: 999,
                        p: '0.5rem',
                        border: '0.1rem solid #2e7d32',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <CheckIcon fontSize={"large"} color={"success"}/>
                    </Box>
                    <Box>
                        <MDFGradientText sx={{
                            fontSize: {
                                xs: '1.5rem',
                                md: '2rem',
                            },
                            fontWeight: 700,
                            textAlign: 'center',

                        }}>Order Confirmed</MDFGradientText>
                    </Box>
                </Box>
                <Box sx={{
                    p: '1rem',
                    backgroundColor: '#fff',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    gap: '1rem',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box>
                        <MDFGradientText sx={{
                            fontWeight: 700,
                            textAlign: 'center',

                        }}>Order Id: {order?.['_id']}</MDFGradientText>
                    </Box>
                    <MDFContainedBox>
                        <Button onClick={() => router.push('/')} sx={{
                            textTransform: 'none',
                            color: '#fff',
                        }}>
                            Go to Home
                        </Button>
                    </MDFContainedBox>
                </Box>
            </Box>
        </Box>
    )
}

export default OrderConfirm