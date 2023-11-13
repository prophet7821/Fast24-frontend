import { v4 as uuidv4 } from 'uuid';


export const generateIdempotencyKey = () => {
    return uuidv4();
}