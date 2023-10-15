export type UserData = Record<string,any> | null;

export interface UserDataAtomType {
    isLoading: boolean;
    data: UserData;
}