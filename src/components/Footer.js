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
             marginTop:'60px',

          }}>
            <Link  to='https://instagram.com/sevenetech?igshid=MzNlNGNkZWQ4Mg=='>
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
              <Link to='https://www.linkedin.com/in/seven-tech-219684275'>
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
            <p> Shop No. 1, Ground Floor,155-C, Gher khatti, New Mandi, Muzaffarnagar ,Uttar Pradesh - 251001 </p>
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
              +91 9988000223
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer