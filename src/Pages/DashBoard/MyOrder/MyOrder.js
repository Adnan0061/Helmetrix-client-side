import { Button, Container, Grid, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const MyOrders = ({value}) => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const keys = [user.email]
        fetch(`https://protected-wildwood-26801.herokuapp.com/orders/bykeys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const handleDelete = id => {
        const url = `https://protected-wildwood-26801.herokuapp.com/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining)
                handleClose()
            })
    }
    return (
        <Container>
            <Box className='justify-content-center'>
                <Grid item xs={12} md={12}>

                    <h3>Your(<b>{user.displayName}</b>) Orders</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">No.</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                    <TableCell align="center">Product Name</TableCell>
                                    <TableCell align="center">Size</TableCell>
                                    <TableCell align="center">Color</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Cancel Order</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                        key={order._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center" component="th" scope="row">{orders.indexOf(order) + 1}</TableCell>
                                        <TableCell align="center" >{order.name}</TableCell>
                                        <TableCell align="center">{order.email}1</TableCell>
                                        <TableCell align="center">{order.address}2</TableCell>
                                        <TableCell align="center">{order.productName}</TableCell>
                                        <TableCell align="center">{order.size}</TableCell>
                                        <TableCell align="center">{order.color}</TableCell>
                                        <TableCell align="center">{order.price}</TableCell>
                                        <TableCell align="center">{order.Status}</TableCell>
                                        <TableCell align="center"><Button onClick={handleOpen}>DELETE</Button></TableCell>


                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Cancel the Order
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Are you sure you want to cancel the order??
                                            </Typography>
                                            <Button onClick={()=>handleDelete(order._id)}>YES</Button>
                                            <Button onClick={handleClose}>No</Button>
                                            </Box>
                                        </Modal>
                                        
                                    </TableRow>
                                ))}
                            </TableBody>

                            
                        </Table>
                    </TableContainer>
                </Grid>
            </Box>
        </Container>
    );
};

export default MyOrders;