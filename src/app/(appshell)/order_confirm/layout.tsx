import Box from "@mui/material/Box";
import React from "react";

const OrderConfirmLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <Box sx={{
            marginTop: {
                xs: '8vh',
                md: '10vh'
            },
            width: '100%'
        }}>
            {children}
        </Box>
    )
}

export default OrderConfirmLayout