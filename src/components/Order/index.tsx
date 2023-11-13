"use client"
import Box from "@mui/material/Box";
import {useSearchParams} from "next/navigation";

const Order = () => {
    const searchParams = useSearchParams()
    const success = searchParams.get('success')
    const paymentIntentId = searchParams.get('payment_intent')

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            color: 'white'

        }}>{
            success ?
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    color: 'white'
                }}>
                    <Box sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem'
                    }}>
                        Thank you for your purchase!
                    </Box>
                    <Box sx={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                    }}>
                        Your order number is {paymentIntentId}
                    </Box>
                </Box>
                :
                <Box sx={{
                    fontWeight: 'bold',
                    fontSize: '2rem'
                }}>
                    Something went wrong
                </Box>
        }
        </Box>
    )
}

export default Order