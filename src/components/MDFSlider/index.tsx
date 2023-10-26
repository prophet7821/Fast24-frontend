import styled from "@mui/material/styles/styled";
import Slider from "@mui/material/Slider";


const MDFSlider = styled(Slider)({
    color: '#ef4444',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '1px solid #ef4444',
        '&:hover': {
            boxShadow: '0 0 0 2px #ef4444',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
})

export default MDFSlider