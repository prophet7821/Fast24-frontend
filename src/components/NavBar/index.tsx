import MDFAppBar from "@/components/NavBar/MDFAppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fast24 from "@/components/Fast24";
import SignIn from "@/components/NavBar/SignIn";
import SignUp from "@/components/NavBar/SignUp";
import SearchGlass from "@/components/NavBar/SearchGlass";
import {userState} from "@/state/atoms/user.atom";
import {useRecoilValue} from "recoil";
import MDFAvatar from "@/components/NavBar/MDFAvatar";
import {useRouter} from 'next/navigation'
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
    const user = useRecoilValue(userState)
    const router = useRouter()
    const getInitials = (name: string) => {
        const names = name.split(' ');
        let initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }

    return (
        <MDFAppBar>
            <Grid container>
                <Grid item xs={4}>
                    <Box onClick={() => router.push('/')} sx={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                    }}>
                        <Fast24 style={{
                            fontSize: {
                                xs: '1rem',
                                md: '1.25rem',
                                lg: '1.5rem',
                                xl: '2rem'
                            }, fontWeight: '600'
                        }}/>
                    </Box>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 2,
                        height: '100%',
                    }}>
                        <Box>
                            <SearchGlass/>
                        </Box>
                        {
                            user.isLoading ? (
                                <Skeleton animation={"wave"} variant="circular">
                                    <Avatar/>
                                </Skeleton>
                            ) : (
                                user.data ? (
                                    <MDFAvatar>{getInitials(user.data["fullName"])}</MDFAvatar>
                                ) : (
                                    <>
                                        <Box sx={{
                                            display: {
                                                xs: 'none',
                                                md: 'flex'
                                            },
                                        }}>
                                            <SignIn/>
                                        </Box>
                                        <Box>
                                            <SignUp/>
                                        </Box>
                                    </>
                                )
                            )
                        }
                    </Box>
                </Grid>
            </Grid>
        </MDFAppBar>
    );
}
export default Navbar;