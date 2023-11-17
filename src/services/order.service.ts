import {instance} from "@/services/API";

export const createOrder = async (car: string, paymentIntent: string) => {
    const {data} = await instance.post('/order/createOrder', {
        car,
        paymentIntent
    })

    return data
}

export const getOrders = async () => {
    const {data} = await instance.get('/order/getOrders')
    return data
}