import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  return (
    <Box className="footer-main">

      {/* about + social  */}
      <Container className='footer-about'>

        {/* <Container> 
          <Grid>
            <Typography sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '20px',
              fontSize: '23px',
            }} >
              <h4>About Us</h4>
            </Typography>
          </Grid>

          <Grid >
            <Typography sx={{ textAlign: 'center', color: 'grey' }}>
              At 7Etech, we are a results-driven e-commerce consulting agency that helps businesses to start and grow.
            </Typography>
          </Grid>
        </Container>*/}

        <Container>
          <Typography sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px',
            fontSize: '23px',
          }} >
            <h4> Our Socials </h4>
          </Typography>

          <Grid sx={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '60px',

          }}>
            <Link to='https://instagram.com/sevenetech?igshid=MzNlNGNkZWQ4Mg=='>
              <InstagramIcon sx={{
                padding: '10px',
                color: 'grey',
                '&:hover': {
                  backgroundColor: '#FFB55F',
                  color: '#fff',
                  borderRadius: '40px',
                  cursor: 'pointer'

                },
              }}></InstagramIcon>
            </Link >
            <Link to='https://www.facebook.com/profile.php?id=100092264030077&mibextid=ZbWKwL'>
              <FacebookIcon sx={{
                padding: '10px',
                color: 'grey',
                '&:hover': {
                  backgroundColor: '#FFB55F',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer'

                },
              }}></FacebookIcon>
            </Link>
            <Link to='https://wa.me/+919988000223' target='_blank'>
              <WhatsAppIcon sx={{
                padding: '10px',
                color: 'grey',
                '&:hover': {
                  backgroundColor: '#FFB55F',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer'

                },
              }}></WhatsAppIcon>
            </Link>
            <Link to='https://www.linkedin.com/in/seven-etech-219684275/'>
              <LinkedInIcon sx={{
                padding: '10px',
                color: 'grey',
                '&:hover': {
                  backgroundColor: '#FFB55F',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer'

                },
              }}>

              </LinkedInIcon>
            </Link>
          </Grid>

        </Container>

      </Container>

      {/* Quick Links  */}
      <Container className='footer-info'>

        <Typography sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px',
          fontSize: '23px',
        }} >
          <h4> Quick Links </h4>
        </Typography>

        <Typography className='footer-links' sx={{ color: 'grey' }}>
          <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/about'> About Us </Link></li>
            <li><Link to='/contact'> Contact Us </Link></li>
            <li><Link to='/blog'> Blogs </Link></li>
          </ul>
        </Typography>
      </Container>

      {/* Contact Us  */}
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px' }}>
        <Typography sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px',
          fontSize: '23px',
        }} >
          <h4>Contact Us</h4>
        </Typography>

        <Grid>
          <Typography sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'grey',
            textAlign: 'center'

          }}>
            <p> E-38, 1st Floor, Sector-40 , Noida, Uttar Prades, India - 201301 </p>

          </Typography>

          <Grid sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
          }}>
            {/* <Button sx={{
              color: '#fff',
              margin: '15px',
              borderRadius: '10px',
              width: '150px',
              fontSize: '10px',
              height: '45px',
            }} variant="contained">
              Get Directions <DirectionsIcon sx={{ marginLeft: '5px' }} />
            </Button> */}
          </Grid>

          <Grid sx={{ display: 'flex', justifyContent: 'center', color: 'grey', alignItems: 'center' }}>
            <Typography sx={{ padding: '5px' }}>
              Call Now :
            </Typography>

            <Typography sx={{ padding: '5px' }}>
              +91 9988000223
            </Typography>

          </Grid>
          <Link style={{ color: 'white', textDecoration: 'none' }} to='https://www.google.com/maps/dir/28.6435007,77.4895731/E-39,+E+Block,+Sector+40,+Noida,+Uttar+Pradesh+201303/@28.626923,77.3617096,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x390ce5954e96bebd:0x3b2bdad425547c5f!2m2!1d77.356382!2d28.568127!3e3?hl=en-IN&entry=ttu'>
            <Button sx={{
              backgroundColor: '#FF971E',
              color: '#fff',
              width: '80%',
              marginLeft: '10%',


              borderRadius: '20px',
              height: '45px',
              '&:hover': {
                backgroundColor: '#FFB55F',
                color: '#fff',
              },
            }}>
              Get Directions <LocationOnIcon />
            </Button>
          </Link>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer