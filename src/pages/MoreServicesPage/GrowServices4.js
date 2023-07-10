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




const GrowServices4 = () => {

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
        Services / Grow your E-Commerce Sales / Visibility Boosting
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
        Visibility Boosting
                </Typography>
        <Typography  variant="h6" component="div"sx={{direction:'row', justifyContent:'center'}} >
        Enhanced Visibility Boosting for E-commerce Success
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In the crowded digital marketplace, enhancing the visibility of your e-commerce business is crucial for reaching your target audience and driving sales. At 7 E tech, we specialize in providing comprehensive visibility boosting services tailored specifically for e-commerce businesses. Our expert team understands the intricacies of online marketing and employs a multi-faceted approach to increase your brands online presence. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and influencer collaborations, we implement targeted strategies to ensure that your products and brand are prominently showcased to your potential customers. Through effective keyword research, optimized content creation, and strategic campaigns, we enhance your visibility across search engines, social media platforms, and relevant online channels. Trust us to handle your visibility boosting needs, allowing you to stand out from the competition, expand your customer base, and achieve e-commerce success. Boost your visibility with our comprehensive visibility boosting services today.
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

export default GrowServices4