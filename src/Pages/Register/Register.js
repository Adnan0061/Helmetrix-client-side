import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { useHistory, useLocation } from 'react-router';
import { Google } from "@mui/icons-material";

const Register = () => {
    const { registerUser, isLoading, authError, googleSignIn } = useAuth();


    const history = useHistory();
    const location = useLocation();
    const url = location?.state?.from || '/';

    const [ loginData, setLoginData ] = useState({})
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        if(loginData.password1 !== loginData.password2){
            alert('password doesn\'t match, type again')

        }
        registerUser(loginData.email, loginData.password1, loginData.name)
        
    }
    return (
        <>
        { 
            isLoading ? <CircularProgress/>:
            <>
            <Header></Header>
            <Container>
            <Grid container spacing={2}>            
                    
                <Grid item sx={{mt: 5, mx: 'auto'}} xs={12} md={6}>
                    <Typography variant='h3' gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            required
                            style={{width: '75%', margin: '5px 0'}}
                            id="name"
                            label="User Name"
                            name='name'
                            onBlur={handleOnChange}
                            // defaultValue="Hello World"
                            variant="standard"
                            />
                        <TextField
                            required
                            style={{width: '75%', margin: '5px 0'}}
                            id="email"
                            label="Email"
                            name='email'
                            onBlur={handleOnChange}
                            // defaultValue="Hello World"
                            variant="standard"
                            />
                        <TextField
                            required
                            style={{width: '75%', margin: '5px 0'}}
                            id="password1"
                            type="password"
                            label="Password"
                            name='password1'
                            onBlur={handleOnChange}
                            variant="standard"
                            // defaultValue=""
                            />
                        <TextField
                            required
                            style={{width: '75%', margin: '5px 0'}}
                            id="password2"
                            type="password"
                            label="Confirm Password"
                            name='password2'
                            onBlur={handleOnChange}
                            variant="standard"
                            // defaultValue=""
                            />
                        <br/>
                        <Button type='submit' sx={{ width: '75%', fontWeight: 400, backgroundColor: '#5FC7C7' }} variant="contained">Register</Button>
                        <NavLink to="/login"><Button variant="text">Already have an account?? Login</Button></NavLink><br/>
                    </form>
                    <Button onClick={()=>googleSignIn(history, url)} variant="contained" startIcon={<Google sx={{backgroundColor: '#fff', color:'#1565C0', p: 1, m:-1.5, mr:.5, borderRadius: 1}} />}>Sign In with google</Button>
                    {/* {user?.email && <Alert severity="success">Account successfully registered</Alert>} */}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

            </Grid>
            </Container>
            <Footer></Footer>
            </>
        }
        </>
    );
};

export default Register;