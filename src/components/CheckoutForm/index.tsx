import React from 'react';
import {
    AddressElement,
    ExpressCheckoutElement,
    LinkAuthenticationElement,
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js"
import {getPaymentIntent} from "@/services/payments.service";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MDFContainedBox from "@/components/MDFContainedBox";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const {error: submitError} = await elements!.submit();
        if (submitError) {
            console.log(submitError)
            return;
        }

        const client_secret = await getPaymentIntent();
        const {error} = await stripe!.confirmPayment({
            elements: elements!,
            clientSecret: client_secret,
            confirmParams: {
                return_url: 'http://localhost:3000'
            }
        })
        if (error) console.log(error)
        else console.log('success')
    }

    return (
        <Box sx={{
            width: '100%',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <ExpressCheckoutElement onConfirm={handleSubmit} />
            </Box>
            <Box component={"form"} onSubmit={handleSubmit} sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '1.5rem'
                }}>
                    <Box sx={{
                        fontWeight: 'bold'
                    }}>
                        Shipping Information
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>

                        <Box>
                            <LinkAuthenticationElement/>
                        </Box>
                        <Box>
                            <AddressElement options={{mode: 'shipping'}}/>
                        </Box>

                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '1.5rem'
                }}>
                    <Box sx={{
                        fontWeight: 'bold'
                    }}>
                        Card Information
                    </Box>
                    <PaymentElement/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <MDFContainedBox>
                        <Button sx={{
                            textTransform: 'none',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }} type={"submit"}>Pay</Button>
                    </MDFContainedBox>
                </Box>
            </Box>
        </Box>
    )
}

export default CheckoutForm;