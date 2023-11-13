export type snackbarStateType = {
    open: boolean,
    severity: "success" | "error" | "info" | "warning",
    message: string,
}