import { Container, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../images/iqbal-2nIBkSxJQ0E-unsplash2.jpg'

const Banner = () => {
    return (
        <Box sx={{background: `linear-gradient(0deg, #56AB2F77, #A7E06377), URL(${bg})`, backgroundSize: 'contain', backgroundPosition: 'center center'}}>
            <Container sx={{height: "60vh", display: 'flex', alignItems: 'center'}}>
                <Box sx={{textAlign: 'center', verticalAlign: 'bottom', color: 'Black', margin: '0 auto'}}> 
                    <Typography sx={{ fontWeight: 'bold', pt: 5 }} variant='h1' component='div'>Be safe in <span style={{color:'#A7E063'}}>Style</span></Typography>
                    {/* <Typography sx={{ fontWeight: 300, my: 5 }} variant='p' component='div'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit veritatis sequi quisquam facilis amet quaerat ut debitis autem, vero natus, earum error perspiciatis id quibusdam enim vel eum ducimus similique incidunt ea ratione iste. Dolorum numquam dicta laudantium quod?</Typography> */}
                    <Link to='/products' style={{textDecoration:'none'}}><Button sx={{ fontWeight: 500, backgroundColor: '#A7E063', color: 'black' }} variant="contained">Check Helmets</Button></Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;
