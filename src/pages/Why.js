import { Box, Container } from '@mui/material'
import React from 'react'
import Whyimg from '../Assets/Why.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Why = () => {
    return (
        <Box>
            <Container sx={{
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '50px',
                    paddingTop: '20px'
                }}> Why 7-ETech ?? </h1>
                <p style={{ color: 'grey'}}>Empower Your Business with our Creative Solutions, Innovative Ideas, and Optimization Strategies</p>
            </Container>

            <Container  sx={{
                display: 'flex',
                padding: '20px',
                justifyContent: 'space-around',
             }}>
                <Container sx={{
                    '@media (max-width: 1200px)': {
                        display: 'none'
                    }
                }}>
                    <img src={Whyimg} alt="Why" />
                </Container>
                <Container sx={{
                    textAlign:'center'
                }}>
                    <p style={{
                        color: 'grey',
                        lineHeight:'45px',
                        fontSize: '20px',
                        marginTop:'50px',
                    }}>
                        Choose 7ETECH as your digital marketing agency and experience the power of tailored strategies, data-driven insights, and exceptional customer service.
                        With our team of experts, you can trust that well help you achieve your goals and exceed your expectations.
                    </p>

                    <Button sx={{
                        backgroundColor: '#FF971E',
                        color: '#fff',
                        marginTop:'20px',
                        borderRadius: '10px',
                        marginLeft: '20px',
                        width:'200px',
                        height: '45px',
                        '&:hover': {
                            backgroundColor: '#FFB55F',
                            color: '#fff',
                        },
                    }} variant="contained">
                        <Link reloadDocument style={{color:'white', textDecoration:'none'}} to='/about'>
                            Learn More
                        </Link>
                    </Button>
                </Container>

            </Container>
        </Box>
    )
}

export default Why