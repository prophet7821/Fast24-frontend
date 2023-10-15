"use client"
import {useQuery} from "@tanstack/react-query";
import {searchService} from "@/services/cars.service";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MDFGradientText from "@/components/MDFGradientText";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import SpecBadge from "@/components/SpecBadge";
import ModelTypeBadge from "@/components/ModelTypeBadge";
import {useRouter} from "next/navigation";

const CarsPage = () => {
    const router = useRouter()
    const {
        data,
        isLoading,
        isError
    } = useQuery({
        queryKey: ['cars'],
        queryFn: () => searchService('bmw', 0, 100)
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
                                <Card sx={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '1rem',
                                    color: 'white',
                                }}>
                                    <CardActionArea onClick={()=> router.push(`/cars/${car["_id"]}`)}>
                                        <CardMedia component={"img"} image={car['carImage']} alt={car['name']}/>
                                        <CardContent>
                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}>
                                                <MDFGradientText sx={{
                                                    fontSize: '1rem',
                                                    fontWeight: 'bold',
                                                }}>
                                                    {car['name']}
                                                </MDFGradientText>
                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                }}>
                                                    <SpecBadge stockSpecs={car['stockSpecs']}
                                                               stockRating={car['stockRating']}/>
                                                    <ModelTypeBadge modelType={car['modelType']}/>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    )
}


export default CarsPage