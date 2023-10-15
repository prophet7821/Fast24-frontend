import Box from '@mui/material/Box';
import styled from "@mui/material/styles/styled";
import bgImg from '@/assets/lg-13.png'


const HeroPic = styled(Box)({
    backgroundImage: `url(${bgImg.src})`,
    height:'75vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
})

export default HeroPic