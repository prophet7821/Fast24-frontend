import Box from "@mui/material/Box";
import React from "react";
import FilterModal from "@/components/FilterModal";

const CarLayout = ({ children }:{children:React.ReactNode}) => {
    return (
        <Box sx={{
            marginTop: {
                xs: '2rem',
                md: '3rem'
            },
            width:'100%'
        }}>
            {children}
            <FilterModal/>
        </Box>
    )
}

export default CarLayout