import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LegalMenu from "./LegalMenu";
import ImageMenu from "./ImageMenu";
import GrowMenu from "./GrowMenu";
import SetUpEcomMenu from "./SetUpEcomMenu";

function SimpleMenu() {
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
        <h4>Services</h4> <ArrowDropDownIcon/>
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
        <MenuItem onClick={handleClose}> <LegalMenu/> {/*<Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support'>Legal Document Support </Link> */} </MenuItem> 
        <MenuItem onClick={handleClose}><SetUpEcomMenu/> {/*<Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/set-up-your-e-commerce-bussiness'>Set-Up your E-Commerce Bussiness</Link> */}</MenuItem>
        <MenuItem onClick={handleClose}><ImageMenu/> {/*<Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'>Imaging and Cataloging Services</Link> */}</MenuItem>
        <MenuItem onClick={handleClose}><GrowMenu/> {/*<Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/grow-your-e-commerce'>Grow your E-Commerce </Link> */}</MenuItem>

      </Menu>
    </div>
  );
}

export default SimpleMenu;
