"use client"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from '@mui/material/Grid'
import {useQuery} from "@tanstack/react-query";
import {searchService} from "@/services/cars.service";
import CarCard from "@/components/CarCard";
import Divider from "@mui/material/Divider";
import BrandLoader from "@/components/BrandLoader";

const BrandsKoenigsegg = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['koenigseggBanner'],
        queryFn: () => searchService('koenigsegg', 0, 6)
    })


    return (
        <>
            {
                isLoading ? (
                    <BrandLoader/>
                ) : isError ? (<></>) : (
                    <>
                        <Box sx={{
                            margin: '1rem'
                        }}>
                            <Typography sx={{
                                color: 'white',
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.5rem',
                                },
                                fontWeight: 'bold',
                            }} variant={"h5"}>They made a family car which went 400kmph</Typography>
                        </Box>
                        <Grid container spacing={2}>
                            {
                                data?.map((car, index) => (
                                    <Grid key={car['_id']} item xs={6} md={2}>
                                        <CarCard car={car}/>
                                    </Grid>
                                ))
                            }
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
        </>
    )
}


export default BrandsKoenigsegg;
