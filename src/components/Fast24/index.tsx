import React from "react";
import MDFGradientText from "@/components/MDFGradientText";
import {SxProps} from "@mui/system";
import styled from "@mui/material/styles/styled";

interface Fast24Props{
    style?: SxProps
}

const Fast24Logo = styled(MDFGradientText)({
    '&:hover':{
        cursor: 'pointer'
    }
})

const Fast24= (props:Fast24Props) => {
  return (
      <Fast24Logo
          sx={{...props.style}}>
        Fast24
      </Fast24Logo>
  );
}


export default Fast24