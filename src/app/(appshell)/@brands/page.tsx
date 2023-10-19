"use client"
import Grid from "@mui/material/Grid";
import MDFOutlinedBox from "@/components/MDFOutlinedBox";
import styled from "@mui/material/styles/styled";
import koenigsegg from '@/assets/koenigsegg_final.png'
import ferrari from '@/assets/ferrari.png'
import porsche from '@/assets/porsche.png'
import bmw from '@/assets/bmw.png'
import buggati from '@/assets/buggati.png'
import lamborghini from '@/assets/lamborghini.png'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";


const brandsBanner = () => {
    return (
        <>
            <Box sx={{
                margin: '1rem',
            }}>
                <Typography sx={{
                    color: 'white',
                    fontSize: {
                        xs: '1rem',
                        sm: '1.5rem',
                    },
                    fontWeight: 'bold',
                }} variant={"h5"}>Take your pick!</Typography>
            </Box>
            <Grid container justifyContent={"space-around"} spacing={2}>
                <Grid item xs={6} md={2}>
                    <Wrap>
                        <img src={koenigsegg.src} alt={"Koenigsegg"}/>
                        <video loop autoPlay muted>
                            <source src={'koenigsegg.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>

                <Grid item xs={6} md={2}>
                    <Wrap>
                        <img src={ferrari.src} alt={"Ferrari"}/>
                        <video loop autoPlay muted>
                            <source src={'ferrari.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap>
                        <img src={porsche.src} alt={"Porsche"}/>
                        <video loop autoPlay muted>
                            <source src={'porsche.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap>
                        <img src={bmw.src} alt={"BMW"}/>
                        <video loop autoPlay muted>
                            <source src={'bmw.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap>
                        <img src={buggati.src} alt={"Buggati"}/>
                        <video loop autoPlay muted>
                            <source src={'buggati.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap>
                        <img src={lamborghini.src} alt={"Lamborghini"}/>
                        <video loop autoPlay muted>
                            <source src={'lambo.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
            </Grid>
        </>

    )
}


const Wrap = styled(MDFOutlinedBox)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow: 'hidden',
    cursor:'pointer',
    position: 'relative',
    '& img': {
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
        width:' 50%',
        transition: 'opacity 0.3s ease-in-out',
        zIndex:0,

    },
    '& video': {
        width: '100%',
        height: '100%',
        opacity:0,
        zIndex:1,
        transition: 'opacity 0.3s ease-in-out'
    },

    '&:hover':{
        transform:'scale(1.05)',
        '& img':{
            opacity:0,
        },
        '& video':{
            opacity:1
        }
    }
})

export default brandsBanner;