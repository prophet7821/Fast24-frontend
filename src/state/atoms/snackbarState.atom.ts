import {atom} from 'recoil';


export const snackbarState = atom({
    key: 'snackbarState',
    default: {
        open: false,
        severity: "success",
        message: '',
    }
})