import React from 'react';
import { Paper, Rating, Typography } from '@mui/material'
import Box from '@mui/material/Box';


const ReviewItem = ({item}) => {

    return (
        <Paper sx={{ backgroundColor: 'lightgray', textAlign: 'center', pt: 5, pb: 5 }}>
            <h4>{item.name}</h4>
            <Box component='div' xs={12} md={6}><Typography sx={{width: '60%', mx: 'auto'}}  xs={12} md={6} variant='body2' component='div'>{item.review}</Typography></Box>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
            <Rating sx={{my: 2}} name="read-only" value={item.rating} readOnly />
                
            </Box>
        </Paper>
    );
};

export default ReviewItem;