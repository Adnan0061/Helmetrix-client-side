import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Button, Container, Grid, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ mt: 15, backgroundColor: '#A7E063' }}>
            <Container>
                <div >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} md={4} lg={4} className='text-start'>
                            <Link to={'/home'} style={{ textDecoration: 'none', color: '#000' }}><h2>Helemtrix</h2></Link>
                            <p>helmetrix, a trusted helmet brand that provide wide ramge of smart desige and safe helmets.</p>
                        </Grid>

                        <Grid item xs={12} md={4} lg={{ span: 3, offset: 2 }} className='text-start'>
                            <h4>Quick links</h4>
                            <List variant="flush">
                                <Link style={{ textDecoration: 'none' }} to={'/home'}><ListItem className='border-0 bg-transparent'>Home</ListItem></Link>
                                <Link style={{ textDecoration: 'none' }} to={'/manage-all-order'}><ListItem className='border-0 bg-transparent'>Manage Orders</ListItem></Link>
                                <Link style={{ textDecoration: 'none' }} to={'/my-orders'}><ListItem className='border-0 bg-transparent'>My Orders</ListItem></Link>
                                <Link style={{ textDecoration: 'none' }} to={'/contact'}><ListItem className='border-0 bg-transparent'>Contact Us</ListItem></Link>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3} className='text-start'>
                            <h4>Subscribe to NewsLetter</h4>
                            <form>
                                <TextField
                                    required
                                    style={{ width: '50%', margin: '5px 0' }}
                                    id="email"
                                    label="Email"
                                    name='email'

                                    // defaultValue="Hello World"
                                    variant="standard"
                                />
                                <Button type='submit' sx={{ fontWeight: 400, my: 2, color: 'black' }} variant="outlined">Subscribe</Button>
                            </form>



                            <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Facebook sx={{ fontSize: 36, px: 1 }} ></Facebook>
                                <Instagram sx={{ fontSize: 36, px: 1 }} ></Instagram>
                                <Twitter sx={{ fontSize: 36, px: 1 }}></Twitter>
                                <LinkedIn sx={{ fontSize: 36, px: 1 }}></LinkedIn>
                            </List>
                        </Grid>
                    </Grid>
            </div>
            <hr/>
            <div style={{ backgroundColor: '#A7E063'}}>
                <Box>
                    <Box className=''>
                        <small>©Helmetrix Tours 2021. All rights reserved.</small>
                    </Box>
                </Box>
            </div>
            </Container>
        </Box >
    );
};

export default Footer;