import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function GrowMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button sx={{color:'black', fontFamily:'poppins',fontSize:'15px', fontWeight:'100', textTransform:'capitalize'}}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <h4>Grow your E-Commerce</h4> <ArrowDropDownIcon/>
      </Button>
      <Menu
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}> <Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce/acc-manage'>Account Mangement </Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce/product'>Product Strategy</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce/pricing'>Pricing Optimization</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce/visibility'>Visibility Boosting </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce/time '> Time-Bound Delivery</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce/data'> Data Analysis</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce/acc-re'> Account Reinstatement</Link></MenuItem>
      </Menu>
    </div>
  );
}

export default GrowMenu;
