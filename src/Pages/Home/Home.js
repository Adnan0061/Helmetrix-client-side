import { Card, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Product from '../Products/Product/Product';
import Banner from './Banner';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Reviews from './Reviews';
import Blogs from './Blogs/Blogs';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://protected-wildwood-26801.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6))
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Box>
                <Container>
                    <Box sx={{ textAlign: 'center', my: 5 }}>
                        <Typography variant='h2'>
                            Our Helmets
                        </Typography>
                        <Typography sx={{ fontWeight: 400 }} variant='h6'>
                            Check some of our best Helmets
                        </Typography>
                    </Box>
                    <main>
                        <Container>
                            <Grid container justify='center' spacing={4}>
                                {
                                    products.map(product => (
                                        <Product key={product._id} product={product} />
                                    ))
                                }
                            </Grid>
                        </Container>
                    </main>
                </Container>
            </Box>
            <Reviews />
            <Blogs/>
            <Footer></Footer>
        </div>
    );
};

export default Home;