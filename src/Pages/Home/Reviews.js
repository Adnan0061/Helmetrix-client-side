import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ReviewItem from './ReviewItem';
import Box from '@mui/material/Box';

const Reviews = () => {
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        fetch('https://protected-wildwood-26801.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)
            })
    }, [])

    console.log(allReviews)


    return (
        <Container sx={{ py: 5 }}>
            <Box sx={{ textAlign: 'center', my: 5 }}>
                <Typography variant='h2'>
                    Customers Reviews
                </Typography>
                <Typography sx={{ fontWeight: 400 }} variant='h6'>
                    Check what our customers says about us
                </Typography>
            </Box>
            <Carousel
                className=''
                fullHeightHover={true}
                indicatorContainerProps={{
                    style: {
                        marginTop: '50px',
                        textAlign: 'center',
                    }
                }}
            >
                {
                    allReviews.map((item, i) => <ReviewItem key={i} item={item} />)
                }
            </Carousel>
        </Container>
    );
};

export default Reviews;