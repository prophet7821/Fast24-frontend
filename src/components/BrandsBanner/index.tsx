import {useRouter} from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import koenigsegg from "@/assets/koenigsegg_final.png";
import ferrari from "@/assets/ferrari.png";
import porsche from "@/assets/porsche.png";
import bmw from "@/assets/bmw.png";
import buggati from "@/assets/buggati.png";
import lamborghini from "@/assets/lamborghini.png";
import Divider from "@mui/material/Divider";
import styled from "@mui/material/styles/styled";
import MDFOutlinedBox from "@/components/MDFOutlinedBox";
import React from "react";

const BrandsBanner = () => {
    const router = useRouter()
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
                    <Wrap onClick={()=> router.push(`/cars?term=koenigsegg`)}>
                        <img src={koenigsegg.src} alt={"Koenigsegg"}/>
                        <video loop autoPlay muted>
                            <source src={'koenigsegg.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>

                <Grid item xs={6} md={2}>
                    <Wrap onClick={()=> router.push(`/cars?term=ferrari`)}>
                        <img src={ferrari.src} alt={"Ferrari"}/>
                        <video loop autoPlay muted>
                            <source src={'ferrari.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap onClick={()=> router.push(`/cars?term=porsche`)}>
                        <img src={porsche.src} alt={"Porsche"}/>
                        <video loop autoPlay muted>
                            <source src={'porsche.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap onClick={()=> router.push(`/cars?term=bmw`)}>
                        <img src={bmw.src} alt={"BMW"}/>
                        <video loop autoPlay muted>
                            <source src={'bmw.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap onClick={()=> router.push(`/cars?term=buggati`)}>
                        <img src={buggati.src} alt={"Buggati"}/>
                        <video loop autoPlay muted>
                            <source src={'buggati.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Wrap onClick={()=> router.push(`/cars?term=lambo`)}>
                        <img src={lamborghini.src} alt={"Lamborghini"}/>
                        <video loop autoPlay muted>
                            <source src={'lambo.mp4'} type={'video/mp4'}/>
                        </video>
                    </Wrap>
                </Grid>
            </Grid>
            <Box sx={{
                margin: '1rem',
                width: '100%'
            }}>
                <Divider sx={{
                    background: '#9e9e9e'
                }}/>
            </Box>
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

export default BrandsBanner;