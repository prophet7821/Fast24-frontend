"use client"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useQuery} from "@tanstack/react-query";
import {getCarById} from "@/services/cars.service";
import MDFGradientText from "@/components/MDFGradientText";
import SpecBadge from "@/components/SpecBadge";
import SpecsTable from "@/components/SpecsTable";
import MDFContainedBox from "@/components/MDFContainedBox";
import BuyNowButton from "@/components/BuyNow";
import {useRecoilState} from "recoil";
import {paymentModalState} from "@/state/atoms/paymentModal.atom";
import StripePayment from "@/components/StripePayment";
import ModelTypeBadge from "@/components/ModelTypeBadge";

const CarDetails = ({params}: { params: { id: string } }) => {
    const [open, setOpen] = useRecoilState(paymentModalState)
    const {data, isLoading, isError} = useQuery({
        queryKey: [params.id],
        queryFn: () => getCarById(params.id)
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>
    console.log(data);

    function handleClick() {
        setOpen(true)
    }

    return (
        <>
            <Container maxWidth={'lg'} sx={{
                margin: '1rem 0',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem',
                            gap: '1rem',
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
                            <Box>
                                <MDFContainedBox>
                                    <BuyNowButton onClick={handleClick}>
                                        Buy Now - ${data?.price}
                                    </BuyNowButton>
                                </MDFContainedBox>
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
                        }}>
                            <Box sx={{
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center',
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
                            }}>
                                <SpecBadge stockSpecs={data?.stockSpecs} stockRating={data?.stockRating}/>
                                <ModelTypeBadge modelType={data?.modelType}/>
                            </Box>

                            <Box sx={{
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                margin: '1rem'
                            }}>
                                Price: <MDFGradientText>${data?.price}</MDFGradientText>
                            </Box>

                            <Box>
                                <SpecsTable data={data}/>
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