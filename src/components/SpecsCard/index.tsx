import MDFContainedBox from "@/components/MDFContainedBox";
import Box from "@mui/material/Box";
import MDFGradientText from "@/components/MDFGradientText";

const SpecsCard = ({title,spec}:{
    title:string,
    spec:string
}) => {
    return (
        <MDFContainedBox sx={{
            padding:'0.1rem',
            fontWeight: 'bold',
            color: '#000',
            gap: '0.5rem',
            borderRadius: '0.5rem',
        }}>
            <Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize:{
                        xs: '0.6rem',
                        sm: '0.8rem',
                        md: '0.9rem',
                        lg: '1rem'
                    }
                }}>
                    {title}
                </Box>
                <Box sx={{
                    backgroundColor: '#000',
                    borderRadius: '0 0 0.5rem 0.5rem',
                    p:1,
                    fontSize:{
                        xs: '0.8rem',
                        sm: '1rem',
                        md: '1.2rem',
                        lg: '1.5rem'
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <MDFGradientText>
                        {spec}
                    </MDFGradientText>
                </Box>
            </Box>

        </MDFContainedBox>
    )

}

export default SpecsCard;