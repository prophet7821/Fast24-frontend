import React from 'react';
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {getPaymentIntent} from "@/services/payments.service";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error: submitError} = await elements.submit();
        if(submitError) {
            console.log(submitError)
            return;
        }

        const client_secret = await getPaymentIntent();
        const {error} = await stripe.confirmPayment({
            elements,
            clientSecret:client_secret,
            confirmParams:{
                return_url: 'http://localhost:3000'
            }
        })

        if(error) console.log(error)
        else console.log('success')
    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement/>
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>

    )
}

export default CheckoutForm;