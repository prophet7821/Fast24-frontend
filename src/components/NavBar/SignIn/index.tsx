import MDFOutlinedBox from "@/components/MDFOutlinedBox";
import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";
import MDFGradientText from "@/components/MDFGradientText";
import {useRouter} from 'next/navigation';

const SignInButton = styled(Button)({
    textTransform: 'none',
    fontSize: '1rem'
})

const SignIn = () => {

    const router = useRouter();
    const handleClick = () => {
        router.push('/signIn');
    }
    return (
        <MDFOutlinedBox>
            <SignInButton disableRipple onClick={handleClick}>
                <MDFGradientText sx={{fontSize: '1rem'}}>SignIn</MDFGradientText>
            </SignInButton>
        </MDFOutlinedBox>
    )
}

export default SignIn
