import {atom} from 'recoil';
import {Filter} from "@/types/filter.type";


export const defaultFilterState = atom<Filter>({
    key: 'defaultFilterState',
    default: {
        term: '',
        modelType: [],
        driveType: [],
        stockSpecs: [],
        price: {
            min: 0,
            max: 50000000
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
    }
})