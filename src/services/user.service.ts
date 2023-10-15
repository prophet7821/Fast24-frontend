import {instance} from "@/services/API";

export const getProfile = async() =>{
    const {data} = await instance.get('/auth/profile');
    return data
}
