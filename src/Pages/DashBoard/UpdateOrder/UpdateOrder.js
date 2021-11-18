import { CircularProgress, Container } from '@mui/material';
import Box from '@mui/material/Box';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

const UpdateOrder = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState([])
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory();
    
    
    const onSubmit = data => {
        setIsLoading(true)
        // console.log(data);
        fetch(`https://protected-wildwood-26801.herokuapp.com/order/${id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            history.push('/dashboard')
        })
    }
    
    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://protected-wildwood-26801.herokuapp.com/order/${id}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data)
            reset()
            setIsLoading(false)
        })
    },[reset, id])
  
    console.log(order)
  
    return (
        <Container>
        <Box className='justify-content-center'> 
        <Box xs={12} md={9} className='m-5'>
        {
            isLoading ? 
            <CircularProgress />
        :
        <>
        <h4>Edit and submit to update the order</h4>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input readOnly defaultValue={order.name} {...register("name", { required: true })} placeholder={order.name} />
            <input readOnly defaultValue={order.email} {...register("email", { required: true })} placeholder={order.email} />
            <input defaultValue={order.mobile} type="tel" {...register("mobile", { required: true })} placeholder={order.mobile} />
            <input defaultValue={order.address} {...register("address", { required: true })} placeholder={order.address} />
            <input readOnly defaultValue={order.productName} {...register("productName", { required: true })}  placeholder={order.productName}/>
            <input readOnly defaultValue={order.price} {...register("price", { required: true })}  placeholder={order.price}/>
            <input defaultValue={order.size} {...register("size", { required: true })}  placeholder={order.size}/>
            <input defaultValue={order.color} {...register("color", { required: true })}  placeholder={order.color}/>
            <select {...register("Status")}>
                <option value="pending">pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Complete">Complete</option>
            </select>
            <input type="submit"/>
        </form>
        </>
        }
        </Box>
        </Box>
        </Container>
    );
};

export default UpdateOrder;