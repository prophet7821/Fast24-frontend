import {instance} from "@/services/API";

export const getPaymentIntent = async () => {
    try {
        const response = await instance.post('/payments/createPaymentIntent', {
            amount: 1000,
            currency: 'inr'
        });
        return {client_secret: response.data.client_secret, error: null};
    } catch (error) {
        return {client_secret: null, error: error};
    }
}