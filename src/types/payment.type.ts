import {Car} from "@/types/car.type";

export type PaymentModalState = {
    open: boolean;
    data: Car | null
}