import {instance} from './API';
import {Car} from "@/types/car.type";


export const searchService = async (search: string, page: number, limit: number) :Promise<Car[]> => {
    const {data} = await instance.get(`/cars/q?search=${search}&page=${page}&limit=${limit}`);
    return data;
}


export const getCarById = async(id:string):Promise<Car> => {
    const {data} = await instance.get(`/cars/${id}`);
    return data;
}
