import {instance} from './API';
import {Car} from "@/types/car.type";
import {Filter} from "@/types/filter.type";


export const searchService = async (search: string, page: number, limit: number) :Promise<Car[]> => {
    const {data} = await instance.get(`/cars/q?search=${search}&page=${page}&limit=${limit}`);
    return data;
}

const filterToParams = (filter: Filter): string => {
    const params = new URLSearchParams();
    Object.keys(filter).forEach(key => {
        const value = filter[key as keyof Filter];
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            Object.entries(value).forEach(([subKey, subValue]) => {
                params.append(`${key}[${subKey}]`, String(subValue));
            })
        } else if (Array.isArray(value)) {
            params.append(key, value.join(','));
        } else {
            params.append(key, String(value));
        }
    });
    return params.toString();
};
export const filterService = async (filter: Filter): Promise<Car> => {
    const params = filterToParams(filter);
    const {data} = await instance.get(`/cars/filter?${params}`);
    return data;
}


export const getCarById = async(id:string):Promise<Car> => {
    const {data} = await instance.get(`/cars/${id}`);
    return data;
}
