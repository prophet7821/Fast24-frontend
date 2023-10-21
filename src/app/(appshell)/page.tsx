import React from 'react';
import Box from '@mui/material/Box'
import MDFGradientText from "@/components/MDFGradientText";
import Typography from '@mui/material/Typography'
import AppShellPic from "@/components/AppShellPic";

const Home = () =>{
    return(
        <AppShellPic>
            <Box sx={{
                color:'white',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                height: '100%',
            }}>
                <MDFGradientText sx={{
                    fontSize: {
                        xs: '3rem',
                        sm: '4rem',
                        md: '5rem',
                    },
                    fontWeight: 'bold',
                    letterSpacing: '0.1rem',
                }}>Fast24</MDFGradientText>
                <Typography sx={{
                    fontSize: {
                        xs: '0.8rem',
                        sm: '1.5rem',
                    },
                    textAlign:'center',
                    fontWeight: 'bold',
                }} variant={"h5"} component={"div"} gutterBottom>An online hub for fast and kewl rides ;) </Typography>
            </Box>
        </AppShellPic>

    )
}

export default Home;