import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function LegalMenu() {
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
        anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}> <Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/gst-pan'>GST & PAN Registration </Link> </MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/msme'>MSME Registration</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/trade'>Trademark Registration</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/fssai'> FSSAI Registration</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/import'> Import & Export Registration</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/apob'>APOB/VPOB Registration</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/tax'> Tax Filling</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{ color: 'black',fontSize:'13px', textDecoration: 'none' }} to='/services/legal-support/other'> Other Services</Link></MenuItem>
      </Menu>
    </div>
  );
}

export default LegalMenu;
