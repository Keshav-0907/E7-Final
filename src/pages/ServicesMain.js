import React from 'react'
import { ServicesData } from '../Data/ServicesData'
import { Box, Container, Grid, Typography } from '@mui/material'
import line from '../Assets/line.png'

const ServicesMain = () => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <Typography className="Service-Top">
                <img className='Service-Line-Img' src={line} alt='err' />
                <h1 style={{ fontSize: '50px' }}> All Services </h1>
            </Typography>
            
            <Container sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                '@media (max-width: 1000px)': {
                    gridTemplateColumns: '1fr 1fr',
                }
                
            }}>

                {
                    ServicesData.map((item, index) => (
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
                                    fontSize: '10px',
                                }}>
                                    {item.text.slice(0, 100)} <span style={{color:'blue',  fontWeight: 'bold'}}>Read More</span>
                                </Typography>
                            </Grid>
                        </Box>
                    ))
                }
            </Container>

        </Box>

    )
}

export default ServicesMain