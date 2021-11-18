import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const Blogs = () => {
    return (
        <Box>
            <Container>
                <Typography sx={{textAlign: 'center'}} variant='h2'>
                    Blogs
                </Typography>
                <Typography sx={{ fontWeight: 400, textAlign: 'center', mb: 5 }} variant='h6'>
                    Check important posts to learn even more 
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} sm={6} lg={4} >
                        <Card sx={{ maxWidth: 345, height:'100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.revzilla.com/blog_content_image/image/78386/redline_hero/22ER650M_40RGN1ALSA2CG_A_38.high.jpeg"
                                alt="green iguana"
                            />
                            <CardContent sx={{ flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    2022 Kawasaki Z650RS first look
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item  xs={12} sm={6} lg={4}>
                        <Card sx={{ maxWidth: 345, height:'100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.revzilla.com/blog_content_image/image/78234/redline_hero/2022-Yamaha-R7-from-every-angle-HERO.jpg"
                                alt="green iguana"
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    2022 Yamaha YZF-R7 review: Three takes on Yamaha's new twin sport bike
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item  xs={12} sm={6} lg={4}>
                        <Card sx={{ maxWidth: 345, height:'100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.revzilla.com/blog_content_image/image/78157/redline_hero/20210911_091921.jpg"
                                alt="green iguana"
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Reliability Rally report: Sub-$1,000 motorcycles, 400 miles, two days, one trophy
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Blogs;