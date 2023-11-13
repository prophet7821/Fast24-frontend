import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import Skeleton from "@mui/material/Skeleton";

const BrandLoader = () => {
    return (
        <>
            <Box sx={{
                margin: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    width: '60%',
                    height: 20,
                    borderRadius: '0.5rem',
                }}>
                    <Skeleton variant="rectangular" width={"100%"} height={"100%"} animation={"wave"}/>
                </Box>
            </Box>
            <Grid container spacing={1}>
                {
                    [...Array(6)].map((_, index) => (
                        <Grid key={index} item xs={6} md={2}>
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
        </>
    )
}

export default BrandLoader