import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Skeleton from "@mui/material/Skeleton";

const CarPageFilterSkeleton = () => {
    return (
        <Box sx={{
            width: '100%'
        }}>
            <Grid container spacing={1}>
                {
                    [...Array(8)].map((_, index) => (
                        <Grid key={index} item xs={6} md={3}>
                            <Box sx={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderRadius: '0.5rem',
                            }}>
                                <Skeleton variant="rectangular" width={"100%"} height={118} animation={"wave"}/>
                                <Box sx={{
                                    p: 1
                                }}>
                                    <Skeleton animation={"wave"}/>
                                    <Skeleton animation={"wave"}/>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default CarPageFilterSkeleton