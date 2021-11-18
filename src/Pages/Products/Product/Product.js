import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom'
// import useStyles from './styles'

const Product = ({product}) => {
    // const classes = useStyles()
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{maxWidth: '100%', height: '100%', backgroundColor: '#90EE905F', display: 'flex', flexDirection: 'column' }}>
            <CardMedia sx={{height: 0, paddingTop: '100%'}} image={product.images} title={product.name} />
            <CardContent sx={{pt: 3, pb: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', columnGap: 2, mb: 2}}>
                <Typography sx={{fontSize: 18}} variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    ${product.price}
                </Typography>
                </Box>
                <Typography sx={{fontSize: 17, fontWeight: 400}} variant='h6' color='textSecondary'>{product.description.split(" ").splice(0, 9).join(" ")}</Typography>
            </CardContent>
            <CardActions  disableSpacing sx={{display: 'flex', justifyContent: 'center'}}>
            <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}}><Button key={product._id} sx={{color:'#000', backgroundColor:'#A7E063', border: '2px solid #000', mb:2}} variant="contained" >View Details</Button></Link>
            </CardActions>
        </Card>
        </Grid>
    );
};

export default Product;