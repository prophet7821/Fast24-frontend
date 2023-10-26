import {atom} from 'recoil';
import {Filter} from "@/types/filter.type";


export const filterState = atom<Filter>({
    key: 'filterState',
    default: {
        modelType: [],
        driveType: [],
        stockSpecs: [],
        price: {
            min: 0,
            max: 50000000
        },
        stockRating: {
            min: 0,
            max: 999
        },
        speed: {
            min: 0,
            max: 10,
        },
        handling: {
            min: 0,
            max: 10,
        },
        acceleration: {
            min: 0,
            max: 10,
        },
        launch: {
            min: 0,
            max: 10,
        },
        braking: {
            min: 0,
            max: 10,
        },
        offroad: {
            min: 0,
            max: 10,
        },
        horsePower: {
            min: 0,
            max: 2000
        },
        weightLbs: {
            min: 0,
            max: 16000
        }
    }
})