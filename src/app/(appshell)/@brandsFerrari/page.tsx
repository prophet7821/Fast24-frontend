"use client"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from '@mui/material/Grid'
import {useQuery} from "@tanstack/react-query";
import {searchService} from "@/services/cars.service";
import CarCard from "@/components/CarCard";

const BrandsFerrari = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['ferrariBanner'],
        queryFn: () => searchService('ferrari', 0, 6)
    })
    if (isLoading) return <div>Hello</div>
    if (isError) return <div>Hello</div>


    return (
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
                }} variant={"h5"}>Men dream their cars Red.</Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    data.map((car, index) => (
                        <Grid key={car['_id']} item xs={6} md={2}>
                            <CarCard car={car}/>
                        </Grid>
                    ))
                }
            </Grid>
        </>

    )
}


export default BrandsFerrari;
