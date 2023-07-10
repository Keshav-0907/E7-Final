import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ServicesData } from '../../Data/ServicesData'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import BasicModal from '../../components/Popup'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';




const GrowServices5 = () => {

  const[open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);

  return (

    <Box sx={{
     

    }}>

      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: '#D5D5D5', paddingY: '30px' }} >
        <Typography sx={{ fontSize: '30px' }} >
          Our Services
        </Typography>
        <Typography>
        Services / Grow your E-Commerce Sales / Time-Bound Delivery
        </Typography>
      </Box>
     
      <Container>
        <Container>
          <Link to='/'>
            <Grid sx={{
              display: 'inline-block',
              alignItems: 'center',
              margin: '20px',
              backgroundColor: '#FF971E',
              padding: '10px',
              borderRadius: '10px',
              color: 'black',
              '&:hover': {
                backgroundColor: '#FFB55F',
                color: '#fff',
              },
            }}>
              ← Go back
            </Grid>
          </Link>
        </Container>

        <Container>
      <Card sx={{ maxWidth: 1345 ,  borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', display: 'flex'}}>
    
          <Box sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center',direction:'row', justifyContent:'center'}}>
      <CardContent  sx={{direction:'row', justifyContent:'center'}}>
        <Typography gutterBottom variant="h4" component="div" sx={{direction:'row', justifyContent:'center'}} >
        Time-Bound Delivery
                </Typography>
        <Typography  variant="h6" component="div"sx={{direction:'row', justifyContent:'center'}} >
        Reliable Time-Bound Delivery of Commitments for Seamless E-commerce Operations
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In the fast-paced world of e-commerce, meeting delivery commitments is crucial for building trust, satisfying customers, and fostering long-term relationships. At 7 E tech, we specialize in providing reliable time-bound delivery services tailored specifically for e-commerce businesses. Our dedicated team understands the importance of timely order processing, efficient logistics, and seamless delivery management. We prioritize speed, accuracy, and customer satisfaction throughout the entire fulfillment process. With our advanced tracking systems, robust partnerships with shipping carriers, and streamlined operations, we ensure that your products reach customers within the promised time frame. Whether its same-day delivery, express shipping, or international shipments, we take the responsibility of delivering on time, allowing you to focus on growing your business and providing exceptional customer experiences. Trust us to handle your time-bound delivery commitments, ensuring that your e-commerce operations run smoothly and your customers receive their orders promptly. Optimize your delivery process with our reliable time-bound delivery services today.
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='/contact'>
      <Button sx={{
                backgroundColor: '#FF971E',
                color: '#fff',
                borderRadius: '8px',
                marginLeft: '20px',
                alignItems: 'center',
                height: '35px',
                marginTop: '10px',
                fontSize: '10px',
                '&:hover': {
                    backgroundColor: '#FFB55F',
                    color: '#fff',
                },
            }} onClick={handleOpen}> Get a Quote  </Button>
            </Link>
      </CardActions>
      </Box>
    </Card>
  
      </Container>

       




        <Container sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          '@media (max-width: 1000px)': {
            gridTemplateColumns: '1fr 1fr',
          },
          '@media (max-width: 700px)': {
            gridTemplateColumns: '1fr',
          }
        }}>
          {
            ServicesData.map((item, index) => {
              return (item.category === 'Growth Services' ?

<Box key={index} sx={{
                  margin: '20px',
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}>
                  <Grid>
                    <img style={{ width: '110px' }} src={item.imgURL} alt='err' />
                  </Grid>
                  <Grid>
                    <Typography variant='h6'>{item.title}</Typography>
                  </Grid>
                  <Grid>
                    <Typography sx={{
                      marginTop:'10px',
                      fontSize: '14px',
                      minHeight: '50px',
                      fontWeight:'Light'
                    }}>
                      {item.text.slice(0, 100)}... <span style={{color:'blue',  fontWeight: 'bold'}}></span>
                    </Typography>
                  </Grid>
                  <BasicModal open={open} setOpen={setOpen}
                  title={item.title}
                  text={item.text}
                  image={item.imgURL}
                  headline={item.headline}
                  >  
                  </BasicModal>
                </Box>
                : null)
            })
          }
        </Container>
      </Container>
    </Box>
  )
}

export default GrowServices5