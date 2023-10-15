import TextField from '@mui/material/TextField';
import styled from "@mui/material/styles/styled";

const MDFTextField = styled(TextField)(({ theme }) => ({
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color:'white',
    borderRadius: '99rem',
    '& fieldset': {
        border:'none',
    },
    '& .MuiInputBase-input': {
        color:'white',
        padding:'0.25rem 1.2rem',
    }

}));


export default MDFTextField;