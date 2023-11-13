import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled"


const FrostedBar = styled(AppBar)({
    background: 'rgba(255,255,255,.1)',
    backdropFilter: 'blur(0.5rem)',
    borderRadius: '1rem',
})


const MDFAppBar = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <Box sx={{
            position: 'fixed',
            padding: '1rem',
            top:'7%',
            left:'50%',
            transform:'translate(-50%,-50%)',
            width:'98%',
            zIndex: 100,
            
        }}>
            <FrostedBar position='static'>
                <Box sx={{
                    p: '0 1rem ',
                }}>
                    <Toolbar disableGutters>
                        {children}
                    </Toolbar>
                </Box>
            </FrostedBar>
        </Box>
    )
}

export default MDFAppBar