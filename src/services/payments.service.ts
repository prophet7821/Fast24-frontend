import {instance} from "@/services/API";

export const getPaymentIntent = async() => {
    const {data} = await instance.post('/payments', {
        amount: 1000,
        currency: 'inr'
    });


    console.log(data.client_secret)
    return data.client_secret
}