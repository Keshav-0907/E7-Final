import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <Box className="footer-main">

      {/* about + social  */}
      <Container className='footer-about'>

        <Container>
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
        </Container>

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
            margin: '10px'

          }}>
            <InstagramIcon sx={{
              padding: '10px',
              color: 'grey',
              '&:hover': {
                backgroundColor: '#FFB55F',
                color: '#fff',
                borderRadius: '20px',
                cursor: 'pointer'

              },
            }}></InstagramIcon>
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
            <li><Link> Home </Link></li>
            <li><Link> About Us </Link></li>
            <li><Link> Contact Us </Link></li>
            <li><Link> Blogs </Link></li>
          </ul>
        </Typography>
      </Container>

      {/* Contact Us  */}
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <p> D-1103, City Apartments, Aditya World City, Ghaziabad, Uttar Pradesh - 201002 </p>
          </Typography>

          <Grid sx={{
            display: 'flex',
            justifyContent: 'center',
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

          <Grid sx={{ display: 'flex', justifyContent:'center', color:'grey'}}>
            <Typography sx={{ padding: '5px'}}>
              Call Now : 
            </Typography>

            <Typography  sx={{ padding: '5px'}}>
              +91 9876543210
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer