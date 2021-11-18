import { Container, Grid, Typography, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
    const [ loginData, setLoginData ] = useState({})
    const { user, LoginUser, authError, setAuthError } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const url = location?.state?.from || '/';

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        LoginUser(loginData.email, loginData.password)
        .then((result) => {
            // alert('Login Successful')
            history.push(url)
        })
        .catch((error) => {
            setAuthError(error.message);
        })
    }
    console.log(loginData)
    return (
        <>
        <Header></Header>
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 5, mx:'auto', textAlign:'center' }} xs={12} md={6}>
                    <Typography variant='h3' gutterBottom>
                        Log in
                    </Typography>
                    <form onSubmit={handleLogin}>
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
                            id="password"
                            type="password"
                            label="Password"
                            name='password'
                            onBlur={handleOnChange}
                            variant="standard"
                            // defaultValue=""
                        />
                        <br/>
                        <Button type='submit' sx={{ width: '75%', fontWeight: 400, backgroundColor: '#5FC7C7' }} variant="contained">Login</Button>
                        <NavLink to="/register"><Button variant="text">Don't have an account?? Register</Button></NavLink><br/>
                    </form>
                    {user?.email && <Alert severity="success">Account successfully registered</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Login;