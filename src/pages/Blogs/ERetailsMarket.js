import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { BlogData } from '../../Data/BlogData'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ERetailsMarket = () => {
  return (
    <Container>
      {/* <Typography align="center" gutterBottom>
      <h1> Blog </h1>

      <p> Blog / Key Enablers for Growth</p>
    </Typography> */}
      <Grid >
        {BlogData.map((item, index) => {
          return item.id === '1' ? (

            <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Grid>
                <Typography variant='h4' sx={{ margin: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                  {item.title}
                </Typography>

                <Grid>
                  <img style={{ width: '100%' }} src={item.imgURL} alt='err' />
                </Grid>

                <Grid sx={{
                  margin: '20px',
                  color: 'grey'
                }}>
                  <Typography sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '20px 5px',
                  }}>
                    <CalendarMonthIcon sx={{ fontSize: '1.5rem', paddingRight: '10px' }} />
                    {item.date}
                  </Typography>

                  <Typography sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '20px 5px'
                  }}>
                    <AccountCircleIcon sx={{ fontSize: '1.5rem', paddingRight: '10px' }} />
                    {item.author}
                  </Typography>


                </Grid>

                <Typography sx={{
                  lineHeight: '2.5rem',
                }}>
                  {item.text}
                </Typography>
              </Grid>
            </Box>


          ) : null;
        })}
      </Grid>

      <Grid sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginY: '20px',
        flexDirection:'row-reverse'
      }}>
       

        <Button sx={{
          backgroundColor: '#FF971E',
          color: '#fff',
          display:'flex',
          flexDirection:'row-reverse',

          borderRadius: '10px',
          height: '35px',
          '&:hover': {
            backgroundColor: '#FFB55F',
            color: '#fff',
          },
        }} variant="contained">
          <Link to='/blog/key-enablers-for-growth' style={{ color: 'black', textDecoration: 'none' }}> Next Vlog </Link>
        </Button>

      </Grid>

    </Container>
  )
}

export default ERetailsMarket