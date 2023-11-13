"use client"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useQuery} from "@tanstack/react-query";
import {getCarById} from "@/services/cars.service";
import MDFGradientText from "@/components/MDFGradientText";
import SpecBadge from "@/components/SpecBadge";
import MDFContainedBox from "@/components/MDFContainedBox";
import BuyNowButton from "@/components/BuyNow";
import {useRecoilState} from "recoil";
import {paymentModalState} from "@/state/atoms/paymentModal.atom";
import StripePayment from "@/components/StripePayment";
import ModelTypeBadge from "@/components/ModelTypeBadge";
import SpecsCard from "@/components/SpecsCard";

const CarDetails = ({params}: { params: { id: string } }) => {
    const [open, setOpen] = useRecoilState(paymentModalState)
    const {data, isLoading, isError} = useQuery({
        queryKey: [params.id],
        queryFn: () => getCarById(params.id)
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    function handleClick() {
        setOpen(true)
    }

    return (
        <>
            <Container maxWidth={'xl'} sx={{
                margin: '1rem 0',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem',
                            gap: '1rem',
                            height: '100%',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                '& img': {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }
                            }}>
                                <img src={data?.carImage} alt={""}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            padding: '1rem',
                            gap: '1rem',
                            justifyContent: 'space-between',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center',
                                flexDirection : 'column'
                            }}>
                                <Box sx={{
                                    width: '100%',
                                }}>
                                    <MDFGradientText sx={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                    }}>
                                        {data?.name}
                                    </MDFGradientText>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    width: '100%'
                                }}>
                                    <SpecBadge stockSpecs={data?.stockSpecs} stockRating={data?.stockRating}/>
                                    <ModelTypeBadge modelType={data?.modelType}/>
                                </Box>
                            </Box>


                            <Box>
                                <MDFContainedBox>
                                    <BuyNowButton onClick={handleClick}>
                                        Buy Now - ${data?.price}
                                    </BuyNowButton>
                                </MDFContainedBox>
                            </Box>

                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'DriveType'} spec={data.driveType}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Weight'} spec={data.weightLbs}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Acceleration'} spec={data.acceleration}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Braking'} spec={data.braking}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Handling'} spec={data.handling}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Launch'} spec={data.launch}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Offroad'} spec={data.offroad}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Speed'} spec={data.speed}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'Top-Speed'}
                                                   spec={data.topSpeed === 'info_not_found' ? '-' : data.topSpeed?.split(" ")[0]}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'0-60Mph'}
                                                   spec={data['0-60Mph'] === 'info_not_found' ? '-' : data['0-60Mph']}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'0-100Mph'}
                                                   spec={data['0-100Mph'] === 'info_not_found' ? '-' : data['0-100Mph']}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <SpecsCard title={'HorsePower'} spec={data.horsePower}/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <StripePayment/>
        </>

    )
}

export default CarDetails;