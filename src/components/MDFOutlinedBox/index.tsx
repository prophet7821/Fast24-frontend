import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

//FIXME - We need gradient border for this component. I have implemented
// - a temporary fix for this by using just one color. Will come back to this later.

const MDFOutlinedBox = styled(Box)({
    borderRadius:'0.5rem',
    border:'1px solid #F27128',
})

export default MDFOutlinedBox;