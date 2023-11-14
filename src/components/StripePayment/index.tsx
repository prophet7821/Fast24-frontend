"use client"

import {useRecoilState} from "recoil";
import {paymentModalState} from "@/state/atoms/paymentModal.atom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Appearance, loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "@/components/CheckoutForm";
import MDFGradientText from "@/components/MDFGradientText";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255,255,255,.2)',
    backdropFilter: 'blur(0.5rem)',
    borderRadius: '1rem',
    width: {
        xs: '90%',
        md: '50%',
    },
    display: 'flex',
    flexDirection: 'column' as 'column',
}


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PKEY!)

const StripePayment = () => {
    const [open, setOpen] = useRecoilState(paymentModalState)
    const handleClose = () => {
        setOpen(false)
    }


    const appearance: Appearance = {
        theme: 'flat',
        labels: 'floating',
        variables: {
            colorText: 'white',
            colorPrimary: '#fff',
            colorTextPlaceholder: 'rgba(255,255,255,0.3)',
            fontSizeBase: '16px', // Base font size
            fontSizeXs: '0.75rem', // Extra small text
            fontSizeSm: '0.875rem', // Small text
            fontSizeLg: '1.125rem', // Large text
            fontSizeXl: '1.25rem', // Extra large text
            fontWeightLight: '300',
            fontWeightNormal: '400',
            fontWeightMedium: '500',
            fontWeightBold: '700',
            fontLineHeight: '1.5', // Line height for better readability
        },
        rules: {
            '.Label': {
                color: '#fff',
                fontWeight: '400',
            },
            '.Input': {
                backdropFilter: 'blur(0.5rem)',
                backgroundColor: 'rgba(255,255,255,0.2)',
            },
            '.Error': {
                color: 'red',
                fontWeight: 'bold',
            }
        }
    };


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="payment"
            aria-describedby="payment"
        >
            <Box sx={style}>
                <Box sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    p: '1.5rem',
                    fontSize: {
                        xs: '1.5rem',
                        md: '2rem'
                    },
                    width: '100%',
                    boxSizing: 'border-box'
                }}>
                    <MDFGradientText>Payment</MDFGradientText>
                </Box>
                <Box sx={{
                    display: 'flex',
                    p: 2,
                    width: '100%',
                    boxSizing: 'border-box',
                    maxHeight: '50vh',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '0.2rem',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#EF4444',
                        borderRadius: '1rem',
                    }
                }}>
                    <Elements stripe={stripePromise}
                              options={{amount: 5000, currency: 'inr', mode: 'payment', appearance: appearance}}>
                        <CheckoutForm/>
                    </Elements>
                </Box>
            </Box>
        </Modal>

    )
}


export default StripePayment;
