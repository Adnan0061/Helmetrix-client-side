import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const PostReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        fetch('https://protected-wildwood-26801.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result !== {}) {
                    alert('Thank You for your "Review"')
                    reset()
                }
            })
    };

    return (
        <Container>
            <Box className='justify-content-center'>
                <Grid item xs={12} md={12}>

                    <h3>Post Your Review</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='text-start'>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <br />
                            <input readOnly type="text" id='name' placeholder="Name" {...register(`name`, { required: true })} defaultValue={user.displayName} />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <br />
                            <input readOnly type="text" id='email' placeholder="Email" {...register("email", { required: true }, { pattern: /^\S+@\S+$/i })} defaultValue={user.email} />
                        </div>

                        <div>
                            <label htmlFor="review">Your Review: </label>
                            <br />
                            <textarea id="review" rows="10" style={{ width: "100%" }} placeholder="Submit Your review here, (upto 2000 words)" {...register("review", { required: true, maxLength: 2000 })} />
                        </div>

                        <div>
                            <label htmlFor="review">Rating </label>
                            <select {...register("rating", { required: true })}>
                                <option value='5'> 5</option>
                                <option value='4'> 4</option>
                                <option value='3'> 3</option>
                                <option value='2'> 2</option>
                                <option value='1'> 1</option>
                                <option value='0'> 0</option>
                            </select>
                        </div>

                        <br />
                        <input id='submit-btn' type="submit" value='Post Review' />
                    </form>

                </Grid>
            </Box>
        </Container>
    );
};

export default PostReview;