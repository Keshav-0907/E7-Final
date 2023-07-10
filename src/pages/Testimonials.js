import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TestimonialCard from '../components/TestomonialCard'
import { TestimonialData } from '../Data/TestimonialData'

const Testimonials = () => {
  return (
    <Box sx={{ textAlign: 'center', marginY: '20px' }}>

    <Typography sx={{ fontSize: '40px', fontWeight: 'bold', padding: '0px 20px', marginTop: '10px' }}>
        What our clients says
    </Typography>

    <Typography sx={{ padding: '0px 20px', marginBottom: '30px', color:'grey', fontWeight:'regular' }}>
        Our Clients send us a bunch of smilies with our services and we love them
    </Typography>

    <Box spacing={3}
    sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        '@media (max-width: 1100px)': {
            display: 'flex',
            flexDirection: 'column'
        },
    }}>
        {
            TestimonialData.map((item, index) => (
                <Grid key={index} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <TestimonialCard
                        name={item.name}
                        image={item.image}
                        content={item.content}
                        company={item.company}
                    />
                </Grid>
            ))}
    </Box>
</Box>
  )
}

export default Testimonials