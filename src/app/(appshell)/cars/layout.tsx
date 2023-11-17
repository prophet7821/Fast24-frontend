import Box from "@mui/material/Box";
import React from "react";

const CarLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <Box sx={{
            marginTop: {
                xs: '8vh',
                md: '10vh'
            },
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {children}
        </Box>
    )
}

export default CarLayout