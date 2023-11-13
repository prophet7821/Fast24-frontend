"use client"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MDFTextField from "@/components/MDFTextField";
import LoginFormSubmitButton from "@/components/LoginFormSubmitButton"
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from 'next/navigation';
import {loginCredentials} from "@/types/loginCredentials";
import {signIn} from "@/services/auth.service";
import {useRecoilState, useSetRecoilState} from 'recoil';
import {AuthState, authState} from "@/state/atoms/auth.atom";
import MDFGradientText from "@/components/MDFGradientText";
import {InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import {useState} from "react";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Tooltip from "@mui/material/Tooltip";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {setAuthHeader} from "@/services/API";
import {snackbarState} from "@/state/atoms/snackbarState.atom";

const SignInForm = () => {

    const router = useRouter();
    const setAuthState = useSetRecoilState(authState)
    const setSnackBarState = useSetRecoilState(snackbarState)
    const [showPassword, setShowPassword] = useState(false)
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email address').required('Required'),
        password: yup
            .string()
            .required('Password is required'),
    });

    const handleShowPassword = () => {
        setShowPassword(s => !s)
    }


    const login = async (values: loginCredentials) => {
        setAuthState((prev: AuthState) => ({...prev, isLoading: true}))
        try {
            const data = await signIn(values);
            setAuthState({
                isLoading: false,
                isAuthenticated: true,
                token: data['token'],
            })
            setAuthHeader(data['token'])
            setSnackBarState(s => ({...s, open: true, message: 'Successfully logged in', severity: 'success'}))
            router.push('/')
        } catch (e: any) {
            if (e.response.status === 401) {
                setSnackBarState(s => ({...s, open: true, message: 'Invalid credentials', severity: 'error'}))
            } else {
                setSnackBarState(s => ({...s, open: true, message: 'Something went wrong', severity: 'error'}))
            }
            setAuthState((prev: AuthState) => ({...prev, isLoading: false}))
        }
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });


    return (
        <Container maxWidth="sm" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',

        }}>
            <form onSubmit={handleSubmit(login)}>
                <Grid container direction="column" rowGap={{
                    xs: '0.7rem',
                }}>
                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: {
                                xs: '2.5rem',
                                lg: '2rem',
                            },
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            <MDFGradientText>Fast24</MDFGradientText>
                        </Box>
                    </Grid>


                    <Grid item>
                        <Grid container rowGap={'0.5rem'}>
                            <Grid item xs={12}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <Box sx={{
                                        width: {
                                            xs: '90%',
                                            sm: '70%',
                                            md: '50%',
                                        }
                                    }}>
                                        <MDFTextField fullWidth variant={"outlined"} placeholder={"Email"}
                                                      type={"email"} {...register("email")}
                                                      InputProps={{
                                                          endAdornment: (
                                                              <InputAdornment position={"end"}>
                                                                  <IconButton disabled>
                                                                      <MailIcon/>
                                                                  </IconButton>
                                                                  {errors.email && (
                                                                      <Tooltip title={errors.email.message}>
                                                                          <ErrorOutlineIcon sx={{color: 'red'}}/>
                                                                      </Tooltip>
                                                                  )}
                                                              </InputAdornment>
                                                          )
                                                      }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <Box sx={{
                                        width: {
                                            xs: '90%',
                                            sm: '70%',
                                            md: '50%',
                                        }
                                    }}>
                                        <MDFTextField fullWidth variant={"outlined"} placeholder={"Password"}
                                                      type={showPassword ? "text" : "password"} {...register("password")}
                                                      InputProps={{
                                                          endAdornment: (
                                                              <InputAdornment position={"end"}>
                                                                  <IconButton
                                                                      onClick={handleShowPassword}>
                                                                      {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                                  </IconButton>
                                                                  {errors.password && (
                                                                      <Tooltip title={errors.password.message}>
                                                                          <ErrorOutlineIcon sx={{color: 'red'}}/>
                                                                      </Tooltip>
                                                                  )}
                                                              </InputAdornment>
                                                          )
                                                      }}/>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <LoginFormSubmitButton/>
                        </Box>
                    </Grid>
                </Grid>
            </form>

            <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                    <IconButton size={"large"} sx={{
                        color: 'white',
                    }}>
                        <GoogleIcon/>
                    </IconButton>
                    <IconButton size={"large"} sx={{
                        color: 'white',
                    }}>
                        <FacebookIcon/>
                    </IconButton>
                </Grid>
            </Grid>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '0.5rem',
                mb: '0.5rem',
                color: 'white',
                fontSize: '0.8rem',
            }}>
                New here?{" "}<MDFGradientText onClick={() => router.push('/signUp')} sx={{
                '&:hover': {
                    cursor: 'pointer',
                },
                fontWeight: 'bold',
            }}> Join us</MDFGradientText>
            </Box>
        </Container>

    )
}

export default SignInForm;