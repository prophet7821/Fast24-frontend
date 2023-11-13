"use client"
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AuthButton = styled(Button)({
    textTransform: 'none',
    color: 'white',
})

const SignUpFormSubmitButton = ({isLoading}: { isLoading: boolean }) => {
    return (
        <IconButton disabled={isLoading} type={"submit"} sx={{
            color: 'white'
        }}>
            <ArrowForwardIcon/>
        </IconButton>
    )
}

export default SignUpFormSubmitButton;