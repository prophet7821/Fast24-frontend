import axios from 'axios';
export const instance = axios.create({
    baseURL: 'http://localhost:3030/v1',
})

export const setAuthHeader = (token:string) =>{
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const removeAuthHeader = () =>{
    delete instance.defaults.headers.common['Authorization'];
}