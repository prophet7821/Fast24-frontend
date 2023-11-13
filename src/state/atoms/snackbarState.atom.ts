import {atom} from 'recoil';
import {snackbarStateType} from "@/types/snackbar.type";


export const snackbarState = atom<snackbarStateType>({
    key: 'snackbarState',
    default: {
        open: false,
        severity: "success",
        message: '',
    }
})