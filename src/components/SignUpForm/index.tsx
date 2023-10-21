"use client"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MDFTextField from "@/components/MDFTextField";
import MDFGradientText from "@/components/MDFGradientText";
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from 'next/navigation';
import {InputAdornment, MenuItem} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Container from "@mui/material/Container";
import React from "react";
import MDFSelect from "@/components/MDFSelect";
import MailIcon from "@mui/icons-material/Mail";
import {signUp} from "@/services/auth.service";
import SignUpFormSubmitButton from "@/components/SignUpFormSubmitButton";
import {User} from "@/types/signUpCredentials";
import {snackbarState} from "@/state/atoms/snackbarState.atom";
import {useSetRecoilState} from "recoil";

const SignUpForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const validationSchema = yup.object({
        fullName: yup
            .string()
            .required('Full Name is required')
            .matches(/^[a-zA-Z]+( [a-zA-Z]+)*$/, 'Full Name can only contain alphabets'),
        mobileCountryCode: yup.string().required(),
        mobileNumber: yup.string().required('Mobile Number is required').matches(/^[0-9]+$/, "Must be only digits"),
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });
    const setSnackBarState = useSetRecoilState(snackbarState)
    const { register, handleSubmit, formState: { errors },watch } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSignUp = async(values:User) => {
        setIsLoading(true);
        try{
            await signUp(values);
            setIsLoading(false);
            setSnackBarState(s => ({...s, open: true, message: 'Successfully signed up'}))
            router.push('/signIn');
        }catch(e){
            setIsLoading(false);
            console.log(e)
            setSnackBarState(s => ({...s, open: true, message: 'Something went wrong', severity: 'error'}))
        }
    }

    return (
        <Container maxWidth="sm" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',

        }}>
            <form onSubmit={handleSubmit(onSignUp)}>
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
                                md: '2rem',
                            },
                            fontWeight: 'bold',
                        }}>
                            <MDFGradientText>Fast24</MDFGradientText>
                        </Box>
                    </Grid>



                    <Grid item xs={12}>
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
                                        <MDFTextField fullWidth variant={"outlined"} placeholder={"Full Name"}
                                                      type={"text"} {...register("fullName")}
                                                      InputProps={{
                                                          endAdornment: (
                                                              <InputAdornment position={"end"}>
                                                                  {errors.fullName && (
                                                                      <Tooltip title={errors.fullName.message}>
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
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 1,
                                        width: {
                                            xs: '90%',
                                            sm: '70%',
                                            md: '50%',
                                        }
                                    }}>
                                        <Box sx={{
                                            width: '30%',
                                        }}>
                                            <MDFSelect variant={"outlined"}
                                                       value={watch('mobileCountryCode')||"+91"}
                                                       fullWidth {...register('mobileCountryCode')}>
                                                <MenuItem value={"+91"}>+91</MenuItem>
                                                <MenuItem value={"+1"}>+1</MenuItem>
                                            </MDFSelect>
                                        </Box>
                                        <Box sx={{
                                            width: '70%',
                                        }}>
                                            <MDFTextField fullWidth variant={"outlined"}
                                                          placeholder={"Mobile Number"} {...register('mobileNumber')}
                                                          InputProps={{
                                                              endAdornment: (
                                                                  <InputAdornment position={"end"}>
                                                                      {errors.mobileNumber && (
                                                                          <Tooltip title={errors.mobileNumber.message}>
                                                                              <ErrorOutlineIcon sx={{color: 'red'}}/>
                                                                          </Tooltip>
                                                                      )}
                                                                  </InputAdornment>
                                                              )
                                                          }}
                                            />
                                        </Box>

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
                                                                      onClick={() => setShowPassword(s => !s)}>
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
                            <SignUpFormSubmitButton isLoading={isLoading}/>
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
                Already have an account?{" "}<MDFGradientText onClick={()=> router.push('/signIn')} sx={{
                fontWeight: 'bold',
                '&:hover': {
                    cursor: 'pointer',
                }
            }}> Sign In</MDFGradientText>
            </Box>
        </Container>

    );
}

export default SignUpForm;
