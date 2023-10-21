"use client"
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useRecoilValue} from "recoil";
import {authState} from "@/state/atoms/auth.atom";

const LoginFormSubmitButton = () => {
    const {isLoading} = useRecoilValue(authState)
    return (
        <IconButton disabled={isLoading} type={"submit"} sx={{
            color:'white'
        }}>
             <ArrowForwardIcon/>
        </IconButton>
    )
}

export default LoginFormSubmitButton