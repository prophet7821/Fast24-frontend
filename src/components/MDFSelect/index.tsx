"use client"
import Select from '@mui/material/Select';
import styled from "@mui/material/styles/styled";

const MDFSelect = styled(Select)(({theme}) => ({
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    '& fieldset': {
        border: 'none',
    },
    borderRadius: '99rem',
    '& .MuiInputBase-input': {
        color: 'white',
        padding: '0.25rem 1.2rem',
    },
}));


export default MDFSelect;