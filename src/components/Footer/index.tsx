import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Footer = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: 'rgba(255,255,255, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                height: '5vh',
                width: '100%',
                paddingTop: '1rem'
            }}>
                <Typography sx={{
                    color: 'white',
                    fontSize: {
                        xs: '0.8rem',
                    },
                    fontWeight: 'bold',
                }} variant={"h5"}>A Samridha Das Production</Typography>
            </Box>
        </>

    )
}


export default Footer;

