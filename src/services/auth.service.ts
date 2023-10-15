import {instance} from './API';
import type {loginCredentials} from '@/types/loginCredentials';
import type {User} from "@/types/signUpCredentials";

export const signIn = async(values:loginCredentials) =>{
    const {data} = await instance.post('/auth/login', values);
    return data;
}

export const signUp = async(values: User) =>{
    const {data} = await instance.post('/auth/signup', values);
    return data;
}