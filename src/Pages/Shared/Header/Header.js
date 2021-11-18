// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import { Button, Container } from '@mui/material';
// import useAuth from '../../hooks/useAuth';
// import { Link } from 'react-router-dom';

import { AccountCircle } from "@mui/icons-material";
import { AppBar, Button, Container, Divider, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {

  const { user, logOutUser } = useAuth()

  const [anchorEl, setAnchorEl] = useState(null);

  const open1 = Boolean(anchorEl);

  const handleMenuClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#A7E063' }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" color='inherit' sx={{ flexGrow: 1, fontSize: '32px', fontWeight: 'bold'}}><Link to='/home' style={{ textDecoration: 'none', color: '#000', textAlign: 'left' }}>Helmetrix</Link></Typography>

            <Link to='/products' style={{ textDecoration: 'none' }}><Button sx={{ color: '#000' }}>Explore Helmets</Button></Link>

            {/* <Link to='/register' style={{textDecoration: 'none'}}><Button sx={{color: '#000'}}>Register</Button></Link> */}

            {/* User Authentication Scetion */}

            {user.email ?
              <div>
                <Button
                  sx={{ color: '#fff' }}
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open1 ? 'true' : undefined}
                  onClick={handleMenuClick1}
                >
                  <AccountCircle sx={{color: '#000'}} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open1}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                  
                  <Link to='/dashboard' style={{ textDecoration: 'none' }}><MenuItem sx={{ color: '#424242'}}onClick={handleClose}>
                    DashBoard
                  </MenuItem>
                  </Link>
                  <Divider />
                  <MenuItem sx={{ color: '#b71c1c'}} onClick={logOutUser}>Logout</MenuItem>
                </Menu>
              </div>
              :
              <>
                <Link to='/login' style={{ textDecoration: 'none' }}><Button sx={{ color: '#000' }}>Login</Button></Link>
                <Link to='/register' style={{ textDecoration: 'none' }}><Button sx={{ color: '#000' }}>Register</Button></Link>
              </>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
};

export default Header;