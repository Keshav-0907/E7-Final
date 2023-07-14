import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../Assets/logo5.png'
import { Link } from "react-router-dom"
import SimpleMenu from './SimpleMenu';


function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className="nav-main">
            <AppBar position="static" sx={{ borderRadius: '20px', background: 'white', height: '105px', width: '95%', margin: '10px 5px' }} >
                <Container >
                    <Toolbar disableGutters >
                        <Link to='/'><img style={{
                            width: '150px',
                            paddingTop: '7px'
                        }} src={logo} alt='err' /></Link>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>

                        {/* Links  */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <div className='hero-link'>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'> <h4> Home </h4></Link>
                                </div>
                                <div className='hero-link'>
                                <SimpleMenu/>
                                </div>
                                <div className='hero-link'>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/blog'><h4> Blogs </h4></Link>
                                </div>
                                <div className='hero-link'>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/about'><h4> About Us </h4></Link>
                                </div>
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around', margin: '0px 120px', color: 'black' }}>
                            <div className='link'>
                                <Link to='/'> <h4> Home </h4></Link>
                            </div>
                            <div className='link'>
                                <SimpleMenu/>
                                {/* <Link to='/servicesmain'><h4> Services </h4></Link> */}
                            </div>
                            <div className='link'>
                                <Link to='/blog'><h4> Blogs </h4></Link>
                            </div>
                            <div className='link'>
                                <Link to='/about'><h4> About Us </h4></Link>
                            </div>
                        </Box>

                        {/* contact US */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Button sx={{
                                backgroundColor: '#FF971E',
                                color: '#fff',
                                width: '110%',
                                borderRadius: '20px',
                                height: '45px',
                                '&:hover': {
                                    backgroundColor: '#FFB55F',
                                    color: '#fff',
                                },
                            }}>
                                <Link style={{ color: 'white', textDecoration: 'none' }} to='/contact'>Contact Us</Link>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
export default ResponsiveAppBar;