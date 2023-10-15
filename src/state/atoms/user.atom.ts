import {atom} from 'recoil';
import {UserDataAtomType} from "@/types/userDataAtom.type";

export const userState = atom<UserDataAtomType>({
    key:'userState',
    default: {
        isLoading: true,
        data: null,
    }
})