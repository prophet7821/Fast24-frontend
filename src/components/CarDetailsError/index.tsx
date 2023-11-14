import Box from "@mui/material/Box";
import noData from "@/assets/no-data-icon.svg";
import Container from "@mui/material/Container";

const CarDetailsError = () => {
    return (
        <Container maxWidth={'xl'} sx={{
            margin: '1rem 0',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <img src={noData.src} alt="No Data Found"/>
                <Box sx={{
                    fontSize: {
                        xs: '1rem',
                        md: '1.5rem',
                    },
                    fontWeight: 'bold',
                    color: '#9e9e9e',
                }}>
                    No Data Found
                </Box>
            </Box>
        </Container>
    )
}

export default CarDetailsError;