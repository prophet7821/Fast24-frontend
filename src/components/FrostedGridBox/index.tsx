import Grid from '@mui/material/Grid';
import styled from "@mui/material/styles/styled";


const FrostedGridBox = styled(Grid)({
    background: 'rgba(0,0,0,.7)',
    borderRadius:'1rem',
    backdropFilter: 'blur(10px)',
})

export default FrostedGridBox