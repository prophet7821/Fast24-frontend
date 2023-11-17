"use client"
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useQuery} from "@tanstack/react-query";
import {getOrders} from "@/services/order.service";
import {loadToken} from "@/state/atoms/loadToken.atom";
import {useRecoilValue} from "recoil";

const UsersOrdersPage = () => {
    const isTokenLoaded = useRecoilValue(loadToken);
    const {data, isError, isLoading} = useQuery({
        enabled: isTokenLoaded,
        queryKey: ["orders"],
        queryFn: getOrders,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <Box sx={{p: 2}}>
            {data?.map((order: any) => (
                <Card key={order._id} sx={{mb: 2, bgcolor: 'rgba(255, 255, 255, 0.1)'}}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{color: 'white'}}>
                            {order.car.name}
                        </Typography>
                        <Typography sx={{mb: 1.5, color: 'gray'}}>
                            Model Type: {order.car.modelType}
                        </Typography>
                        <Typography variant="body2" sx={{color: 'white'}}>
                            Price: {order.car.price}
                            <br/>
                            Order Date: {new Date(order.createdOn).toLocaleDateString()}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default UsersOrdersPage;
