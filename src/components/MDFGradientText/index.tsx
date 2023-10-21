"use client"
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Box";

const MDFGradientText = styled(Typography)({
    background:'linear-gradient(127deg, #EF4444 0%, #F59E0B 100%)',
    backgroundClip:'text',
    color:'transparent',
    display:'inline'
})

export default MDFGradientText;