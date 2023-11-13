"use client"
import Container from "@mui/material/Container";
import SuspenseLoader from "@/components/SuspenseLoader";


const AuthLoader = () => {
    return (
        <Container maxWidth={"lg"} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            <SuspenseLoader/>
        </Container>
    )
}

export default AuthLoader;
