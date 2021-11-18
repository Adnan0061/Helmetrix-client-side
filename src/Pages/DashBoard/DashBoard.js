import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Tab, Tabs } from '@mui/material';
import MyOrders from './MyOrder/MyOrder';
import PostReview from './PostReview/PostReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AddProducts from './AddProduct/AddProduct';

const drawerWidth = 200;

function DashBoard(props) {
    const { user, logOutUser } = useAuth()
    const [ isAdmin, setIsAdmin ] = React.useState({})
    // console.log(user)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(()=>{
        fetch(`https://protected-wildwood-26801.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[user.email])

    // console.log(isAdmin)

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Box >{children}</Box>
                    </Box>
                )}
            </div>
        );
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Payment" {...a11yProps(0)} />
                <Tab label="My Orders" {...a11yProps(1)} />
                <Tab label="Review" {...a11yProps(2)} />
                { isAdmin?.admin && <Tab label="Manage Orders" {...a11yProps(3)} />}
                { isAdmin?.admin && <Tab label="Make Admin" {...a11yProps(4)} />}
                { isAdmin?.admin && <Tab label="Add Product" {...a11yProps(5)} />}
                { isAdmin?.admin ? <Tab label="Log Out" {...a11yProps(6)} /> : <Tab label="Log Out" {...a11yProps(3)} /> }
            </Tabs>
        </div>
    );

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `box-${index}`,
        };
    }


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }} noWrap component="div">
                        DASHBOARD: <span style={{color: 'lightgreen'}}> {user.email}</span>
                    </Typography>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}><Typography sx={{paddingX: 4, paddingY:1.1, borderRadius: 1, color: '#000', backgroundColor: '#A7E063' }} noWrap component="div">
                        Go To Home
                    </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, 
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <TabPanel value={value} index={0}>
                    <Box>
                        <Typography variant='p'>payment option is comming soon. <span style={{color: 'green', fontSize: '22px'}}>Stay Tuned</span></Typography>
                    </Box>
                </TabPanel>               
                
                <TabPanel value={value} index={1}>
                    <MyOrders value={value} ></MyOrders>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <PostReview/>
                </TabPanel>

                { isAdmin?.admin && 
                <TabPanel value={value} index={3}>
                    <ManageAllOrders/>
                </TabPanel>
                }
                
                { isAdmin?.admin && 
                <TabPanel value={value} index={4}>
                    <MakeAdmin/>
                </TabPanel>
                }

                { isAdmin?.admin && 
                <TabPanel value={value} index={5}>
                    <AddProducts />
                </TabPanel>
                }

                { isAdmin?.admin ? 
                <TabPanel value={value} index={6}>
                    <Box sx={{m:5, p:5}}>
                    <Typography variant='h6' component='div'>Finish working here, for log out click the button.</Typography>
                    <Button onClick={logOutUser} variant="contained">Log Out</Button>
                    </Box>
                </TabPanel>
                :
                <TabPanel value={value} index={3}>
                    <Box sx={{m:5, p:5}}>
                    <Typography variant='h6' component='div'>Finish working here, for log out click the button.</Typography>
                    <Button onClick={logOutUser} variant="contained">Log Out</Button>
                    </Box>
                </TabPanel>
                }
            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
