import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {Car} from "@/types/car.type";
import {useRouter} from "next/navigation";
import Box from "@mui/material/Box";
import MDFGradientText from "@/components/MDFGradientText";
import SpecBadge from "@/components/SpecBadge";
import ModelTypeBadge from "@/components/ModelTypeBadge";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";

const CarCard = ({car}: { car: Car }) => {
    const router = useRouter()
    return (
        <Card sx={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            color: 'white',
        }}>
            <CardActionArea onClick={() => router.push(`/cars/${car['_id']}`)} disableRipple>
                <CardMedia component={"img"} image={car['carImage']} alt={car['name']}/>
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'space-between',
                        gap: '0.3rem'
                    }}>
                        <Tooltip title={car['name']}>
                            <MDFGradientText sx={{
                                fontSize: {
                                    xs: '1rem',
                                    md: '0.8rem'
                                },
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {car['name']}
                            </MDFGradientText>
                        </Tooltip>
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
                        <Box>
                            <MDFGradientText sx={{
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}>
                                ${car['price']}
                            </MDFGradientText>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}


export default CarCard