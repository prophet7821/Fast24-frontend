import React from "react";
import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";
import MDFContainedBox from "../../MDFContainedBox";
import {useRouter} from 'next/navigation';

const SignUpButton = styled(Button)({
    textTransform: 'none',
    color:'white',
})

const SignUp = () => {
    const router = useRouter();
    const handleClick = () =>{
        router.push('/signUp')
    }
    return (
        <MDFContainedBox>
            <SignUpButton onClick={handleClick} sx={{
                fontSize: {
                    md:'1rem',
                }
            }} disableRipple>SignUp</SignUpButton>
        </MDFContainedBox>
    )
}


export default SignUp;
