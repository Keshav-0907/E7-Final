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
        <h4>Imaging and Cataloging Services</h4> <ArrowDropDownIcon/>
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
        <MenuItem onClick={handleClose}> <Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/photoshoot'>Photoshoot Services </Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/store'>Storefront Creation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/a'>A+ Content Creation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/info'> Infographic Images</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/video'> Video Production</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/content'> Content Writing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/graphic'> Graphic Designing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/content-optimi'> Content Optimization</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/usp'> USP Analysis</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/product'> Product Description Writing</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/storyboard'> Storyboard Representation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/imaging-and-cataloging-services/digital'> Digital Marketing</Link></MenuItem>
      </Menu>
    </div>
  );
}

export default ImageMenu;
