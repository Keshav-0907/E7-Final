import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ImageMenu() {
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
        <h4>Legal Document Support</h4> <ArrowDropDownIcon/>
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
        <MenuItem onClick={handleClose}> <Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'>Photoshoot Services </Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'>Storefront Creation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'>A+ Content Creation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'> Infographic Images</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-service'> Video Production</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-service'> Content Writing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-service'> Graphic Designing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-service'> Content Optimization</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-service'> USP Analysis</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'> Product Description Writing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'> Storyboard Representation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services'> Digital Marketing</Link></MenuItem>
      </Menu>
    </div>
  );
}

export default ImageMenu;
