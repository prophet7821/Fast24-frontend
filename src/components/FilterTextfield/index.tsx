import styled from "@mui/material/styles/styled";
import TextField from "@mui/material/TextField";

const FilterTextfield = styled(TextField)({
    width: '80%',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ef4444',
        },
        '&:hover fieldset': {
            borderColor: '#ef4444',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ef4444',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#fff',
        '&.Mui-focused' :{
            color: '#fff'
        }
    },
    '& .MuiOutlinedInput-input': {
        color: '#fff',
    },
})

export default FilterTextfield;