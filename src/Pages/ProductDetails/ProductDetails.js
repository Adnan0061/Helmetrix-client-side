import { CircularProgress, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './ProductDetails.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
// import Header from '../Shared/Header';

const ProductDetails = () => {
    const { user, isLoading, setIsLoading } = useAuth()
    const { id } = useParams('');
    const [productLoading, setProductLoading] = useState(true)
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // delete data._id;
        // console.log(data)

        fetch('https://protected-wildwood-26801.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result !== {}) {
                    alert('Your Booking has been accepted')
                    reset()
                }
            })
    };

    useEffect(() => {
        setProductLoading(true)
        fetch(`https://protected-wildwood-26801.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setProductLoading(false)
                setIsLoading(false)
            })
    }, [reset, id, setIsLoading])

    // console.log(user)
    // console.log(product)

    return (
        <>
        {
        (isLoading || productLoading) ? <CircularProgress/> :
            <>
                <Header></Header>
                <Box sx={{ my: 2 }}>
                    <Container>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <img src={product.images} alt={product.name} width='100%' />

                                </Grid>
                                <Grid sx={{textAlign: 'left'}} item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontSize: '42px', fontWeight: '300', mt: 5 }} variant='h2'>{product.name}</Typography>
                                    <Typography sx={{ fontSize: '32px', fontWeight: '500', my: 2 }} variant='h3'>Price: ${product.price}</Typography>
                                    <Typography sx={{ fontSize: '22px', fontWeight: '400' }} variant='p'><b>Sizes:</b> {product?.sizes.map(size => <span key={size}>{size}, </span>)}</Typography>
                                    <br/>
                                    <Typography sx={{ fontSize: '22px', fontWeight: '400' }} variant='p'><b>Colors:</b> {product?.colors.map(color => <span key={color}>{color}, </span>)}</Typography>
                                    <br /><br />
                                    <Typography sx={{ fontSize: '19px', fontWeight: '400' }} variant='p'><b>Description:</b> {product.description}</Typography>
                                </Grid>

                                <Grid sx={{mx: 'auto', mt:5, paddingRight: '24px', border: '2px solid #A7E063'}} item xs={12} sm={12} md={6}>
                                    <Typography sx={{textAlign: 'center'}} variant='h4'>Book your helmet now</Typography>
                                    <form onSubmit={handleSubmit(onSubmit)} className='text-start'>
                                        <div>
                                            <label htmlFor="name">Name: </label>
                                            <br/>
                                            <input readOnly type="text" id='name' placeholder="Name" {...register(`name`, { required: true })} defaultValue={user.displayName} />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email: </label>
                                            <br />
                                            <input readOnly type="text" id='email' placeholder="Email" {...register("email", { required: true }, { pattern: /^\S+@\S+$/i })} defaultValue={user.email} />
                                        </div>
                                        <div>
                                            <label htmlFor="mobile">Mobile No.</label>
                                            <br />
                                            <input type="number" id='mobile'  {...register("mobile", { required: true }, { maxLength: 20 })} />
                                        </div>
                                        <div>
                                            <label htmlFor="address">Address</label>
                                            <br />
                                            <input type="text" id='address' {...register("address", { required: true })} />
                                        </div>
                                        <div>
                                            <label htmlFor="productName">Product Name</label>
                                            <br />
                                            <input readOnly type="text" id='productName' {...register("productName")} defaultValue={product.name} />
                                        </div>
                                        <div>
                                            <label htmlFor="price">Product Price ($ USD)</label>
                                            <br />
                                            <input readOnly type="text" id='price' {...register("price")} defaultValue={product.price} />
                                        </div>
                                        
                                        <div>
                                        <label htmlFor="size" style={{paddingRight:10}}>Choose Size</label>
                                        <select {...register("size")}>
                                            {
                                                product?.sizes.map(size => <option key={size} value={size}>{size}</option>)
                                            }
                                        </select>
                                        </div>
                                        
                                        <div>
                                        <label htmlFor="color" style={{paddingRight:10}}>Choose Color</label>
                                        <select {...register("color")}>
                                            {
                                                product?.colors.map(color => <option key={color} value={color}>{color}</option>)
                                            }
                                        </select>
                                        </div>
                                        
                                        <select hidden {...register("Status")}>
                                            <option value="pending">pending</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                        <br />
                                        <input id='submit-btn' type="submit" value='Book product' />
                                    </form>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
                <Footer></Footer>
            </>
        }
        </>
    );
};

export default ProductDetails;