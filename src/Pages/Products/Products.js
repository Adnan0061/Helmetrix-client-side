// import { Container, Grid, Typography } from '@mui/material';
// import { Box, fontWeight } from '@mui/system';
// import React, { useEffect, useState } from 'react';
// import Header from '../Shared/Header';
// import Product from './Product/Product';

import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Box from '@mui/material/Box';
import Product from "./Product/Product";
import Footer from "../Shared/Footer/Footer";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://protected-wildwood-26801.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <>
        <Header></Header>
        <main>
            <Container>

                <Box sx={{ textAlign: 'center', mt: 5, mb: 10 }}>
                    <Typography variant='h2'>
                        Our Helmets
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }} variant='h6'>
                        We have amazing helmets. Check all of our best Helmets and find your favourite one.
                    </Typography>
                </Box>

                <Grid container justify='center' spacing={4}>
                    {
                        products.map(product => (
                            <Product key={product._id} product={product} />
                        ))
                    }
                </Grid>
            </Container>
        </main>
        <Footer></Footer>
        </>
    );
};

export default Products;