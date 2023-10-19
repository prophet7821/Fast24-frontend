"use client"
import {useQuery} from "@tanstack/react-query";
import {searchService} from "@/services/cars.service";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CarCard from "@/components/CarCard";
import {useRouter, useSearchParams} from "next/navigation";

const CarsPage = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const term = searchParams.get('term')
    const {
        data,
        isLoading,
        isError
    } = useQuery({
        queryKey: ['cars'],
        queryFn: () => searchService(term!, 0, 100)
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>
    console.log(data);

    return (
        <Container maxWidth={'lg'} sx={{
            color: 'white',
            padding: '2rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <Box sx={{
                display: 'flex',
                width: '100%',
            }}>
                <Box sx={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                }}>
                   Returned {data?.length} results
                </Box>
                {/*Filter Button*/}
            </Box>

            <Box sx={{
                width: '100%',
            }}>
                <Divider sx={{
                    backgroundColor: '#9e9e9e'
                }}/>
            </Box>

            <Box sx={{
                width: '100%',
            }}>
                <Grid container spacing={2}>
                    {
                        data?.map((car: any) => (
                            <Grid key={car['_id']} item xs={6} md={4} lg={3}>
                                <CarCard car={car}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    )
}


export default CarsPage