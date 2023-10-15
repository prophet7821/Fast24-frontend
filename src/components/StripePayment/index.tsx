import {useRecoilState} from "recoil";
import {paymentModalState} from "@/state/atoms/paymentModal.atom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "@/components/CheckoutForm";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0,0,0,.2)',
    backdropFilter: 'blur(0.5rem)',
    borderRadius: '1rem',
    width: '50%',
}


const StripePayment = () => {
    const stripePromise = loadStripe('pk_test_51LJhJ7SCfwlvAQMZfP44IaY1cAsVKLRkhXmCydPxjfEcZXamLSoawiWGlwL3qvJcxYuQ4yhE98FVQUYafGrfvQ5F00NV03LOwB')
    const [open, setOpen] = useRecoilState(paymentModalState)
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="payment"
            aria-describedby="payment"
        >
            <Box sx={style}>
                <Elements stripe={stripePromise} options={{
                    mode:'payment',
                    amount: 1000,
                    currency: 'inr'
                }}>
                    <CheckoutForm/>
                </Elements>
            </Box>
        </Modal>

    )
}


export default StripePayment;
