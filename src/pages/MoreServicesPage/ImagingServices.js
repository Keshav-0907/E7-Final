import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ServicesData } from '../../Data/ServicesData'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import BasicModal from '../../components/Popup'
import { useState } from 'react';

const ImagingServices = () => {

  const[open, setOpen] = useState(false);

  return (
    <Box sx={{
    }}>
      {/* <Container> 
        <Link to='/'>
          <Grid sx={{ display: 'inline-block', alignItems: 'center' }}>
            Go back
          </Grid>
        </Link>
      </Container> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center',backgroundColor:'#D5D5D5', paddingY:'30px' }} >
        <Typography sx={{ fontSize: '30px' }} >
          Our Services
        </Typography>
        <Typography>
          Services / Imaging and Cataloging Services
        </Typography>
      </Box>

      <Container>
      <Container>
          <Link to='/'>
            <Grid sx={{ 
              display: 'inline-block', 
              alignItems: 'center', 
              margin:'20px', 
              backgroundColor:'#FF971E', 
              padding:'10px',
              borderRadius:'10px',
              color:'black' ,
              '&:hover': {
                backgroundColor: '#FFB55F',
                color: '#fff',
              },
              }}>
            ← Go back
            </Grid>
          </Link>
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
              return (item.category === 'Imaging Service' ?

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

export default ImagingServices