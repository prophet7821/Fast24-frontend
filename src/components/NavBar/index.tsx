"use client"
import MDFAppBar from "@/components/NavBar/MDFAppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fast24 from "@/components/Fast24";
import SignIn from "@/components/NavBar/SignIn";
import SignUp from "@/components/NavBar/SignUp";
import SearchGlass from "@/components/NavBar/SearchGlass";
import {userState} from "@/state/atoms/user.atom";
import {useRecoilState, useSetRecoilState} from "recoil";
import MDFAvatar from "@/components/NavBar/MDFAvatar";
import {useRouter} from 'next/navigation'
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import React from "react";
import {authState} from "@/state/atoms/auth.atom";
import {snackbarState} from "@/state/atoms/snackbarState.atom";


const Navbar = () => {
    const [user, setUser] = useRecoilState(userState)
    const [auth, setAuth] = useRecoilState(authState)
    const setSnackbarState = useSetRecoilState(snackbarState)
    const router = useRouter()
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


    const settings = [
        {
            id: 1,
            name: 'Orders',
            cb: () => {
                console.log('Orders')
            }
        },
        {
            id: 2,
            name: 'Logout',
            cb: () => {
                setAuth((a) => ({
                    ...a,
                    isAuthenticated: false,
                    token: "",
                }))
                setSnackbarState((s) => ({
                    ...s,
                    open: true,
                    message: "Logged out successfully!",
                    severity: "success"
                }))
            }
        }
    ];


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                                    <>
                                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                            <MDFAvatar>{getInitials(user.data["fullName"])}</MDFAvatar>
                                        </IconButton>
                                        <Menu
                                            sx={{mt: '45px'}}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {settings.map((setting) => (
                                                <MenuItem key={setting.id} onClick={(e) => {
                                                    setting.cb()
                                                    handleCloseUserMenu()
                                                }}>
                                                    <Typography textAlign="center">{setting.name}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </>

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