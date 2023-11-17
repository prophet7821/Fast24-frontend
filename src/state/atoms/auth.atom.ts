import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';


const {persistAtom} = recoilPersist()

export const authState = atom<AuthState>({
    key: 'authState',
    default: {
        isAuthenticated: false,
        isLoading: false,
        token: "",
    },
    effects: [persistAtom],
})

export type AuthState = {
    isAuthenticated: boolean,
    isLoading: boolean,
    token: string,
}