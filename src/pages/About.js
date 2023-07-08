import { Box, Container, Grid } from '@mui/material'
import React from 'react'

const About = () => {

    const Data = () => [
        {
            text: "At 7Etech, we are a results-driven e-commerce consulting agency that helps businesses to start and grow their accounts on various e-commerce marketplaces, D2C websites, and digital channels in India and beyond. Some of the platforms we work with include Amazon, Flipkart, Jiomart, and other leading players in the Indian market.",
        },
        {
            text: "Acknowledging the vital role that Micro, Small & Medium Enterprises (MSMEs) play as the cornerstone of the Indian economy, contributing a substantial 30% to the country's GDP, our objective is to establish ourselves as the most trusted facilitator and enabler for MSMEs on the e-commerce platform."
        },
        {
            text: "Our primary focus is on delivering profits for our clients by implementing a data-driven, ROI-focused approach that leverages our expertise in digital strategy, creative insights, branding, and digital marketing. We offer a wide range of services that includes website design and development, photography, video production, content writing, and graphic designing."
        },
        {
            text: "One of our core values is to help our clients reduce their operational costs by utilizing the latest technologies and tools available in the market. Our team is dedicated to delivering exceptional results that exceed our client’s expectations while ensuring that their businesses grow sustainably. Contact us today to learn how we can help you achieve your e-commerce goals."
        },
        {
            text: "7Etech is also an incubator and owner of brands like Grit Gear and Fox Furry. Brands, known for providing top-quality products in the lifestyle and sports categories that are affordable and easily accessible to our customers."
        }

    ]

    return (
        <Container>
            <Box sx={{
                padding: '20px',
                borderRadius: "20px",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                margin: '10px',
                '&:hover':{
                    cursor:'pointer',
                }
                
            }}>
                <Grid sx={{ textAlign: 'center', color: '#FF971E' }}>
                    <h1>About Us</h1>
                </Grid>
                {
                    Data().map((item, index) => (
                        <Box key={index} sx={{ margin: '20px 0px', fontSize: '15px' }}>
                            <p> {item.text}</p>
                        </Box>
                    ))
                }
            </Box>

            <Box sx={{ 
                textAlign: 'center', 
                margin: '30px 0px 0px 0px'
                }}>
                <h2> INNOVATIVE, IMPACTFUL AND <span style={{ color: '#FF971E' }}>RESPONSIVE</span>  </h2>
            </Box>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: "1fr 1fr",
                '&:hover':{
                    cursor:'pointer',
                }
            }}>
                <Grid sx={{
                    padding: '15px',
                    borderRadius: "20px",
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    margin: '30px'
                }}>
                    <h3 style={{ textAlign: 'center', margin: '5px', color: '#FF971E' }}>Vision</h3>
                    <p>To be the leading e-commerce consulting partner in India and beyond, renowned for our expertise in enabling businesses to achieve sustainable growth and success in the e-commerce marketplace.</p>
                </Grid>

                <Grid sx={{
                    padding: '15px',
                    borderRadius: "20px",
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    margin: '30px'
                }}>
                    <h3 style={{ textAlign: 'center', margin: '5px', color: '#FF971E' }}>Mission</h3>
                    <p>At 7Etech, our mission is to help businesses establish and grow their e-commerce presence by identifying product strengths and gaps, and devising effective customized marketing strategies to reach target customers across the globe.</p>
                </Grid>
            </Box>

            <Box>
                <Grid sx={{
                    padding: '15px',
                    borderRadius: "20px",
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    margin: '30px',
                    '&:hover':{
                        cursor:'pointer',
                    }
                }}>
                    <h3 style={{ textAlign: 'center', margin: '5px', color: '#FF971E' }}>Values</h3>
                    <p>At 7etech, we hold ourselves to the highest standards of accountability, integrity, and commitment to delivering exceptional service to our customers. We believe in creating a happy and positive work environment that fosters teamwork, innovation, and continuous learning. Our ability to adapt to changing market needs is at the core of our success, as we continuously strive to improve our processes and services to exceed customer expectations.</p>
                </Grid>
            </Box>

        </Container>
    )
}

export default About