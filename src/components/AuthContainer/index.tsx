import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import bgImg from '@/assets/bg-login-9.png';


const AuthContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,
    padding:0,
    height: '100vh',
    backgroundImage: `url(${bgImg.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
})

export default AuthContainer;