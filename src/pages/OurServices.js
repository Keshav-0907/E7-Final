import React from 'react'
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import line from '../Assets/line.png'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { OurServicesData } from '../Data/OurServicesData';
import { Link } from 'react-router-dom';


const OurServices = () => {
    return (
        <Box>
            <Typography className="Service-Top">
                <img className='Service-Line-Img' src={line} alt='err' />
                <h1 style={{ fontSize: '50px' }}> Our Services </h1>


                <Container className='service-Top-Text'>
                    <p>Get solutions for strategy, design, platform selection, optimization, payment integration, analytics, digital marketing, and support.</p>
                </Container>
            </Typography>

            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px'
            }}>

                {/* <FormControl sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }} variant="standard">
                    <Input
                        disableUnderline={true}
                        sx={{ border: '1px solid black', padding: '4px', borderRadius: '8px', width: '300px' }}
                        variant="outlined"
                        id="input-with-icon-adornment"
                        placeholder="Enter Your Email ID"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        } />
                    <Button sx={{
                        backgroundColor: '#FF971E',
                        color: '#fff',
                        borderRadius: '10px',
                        marginLeft: '20px',
                        height: '45px',
                        '&:hover': {
                            backgroundColor: '#FFB55F',
                            color: '#fff',
                        },
                    }} variant="contained" endIcon={<SendIcon />}>
                        Get Started
                    </Button>
                </FormControl> */}
            </Container>

            <Container sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                '@media (max-width: 1000px)': {
                    gridTemplateColumns: '1fr 1fr',
                },
                '@media (max-width: 700px)': {
                    gridTemplateColumns: '1fr',
                }
            }}>
                {
                    OurServicesData.map((item, index) => (
                        <Box key={index} sx={{
                            margin: '20px',
                            padding: '20px',
                            textAlign: 'left',
                            borderRadius: '10px',
                            minHeight: '150px',
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            '&:hover': {
                                cursor: 'pointer',
                            }
                        }}>
                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                '@media (max-width: 1000px)': {
                                    flexDirection: 'column',
                                }
                            }} >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                    <img style={{ width: '120px' }} src={item.imageURL} alt='err' />
                                </div>

                                <div>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold', display:'flex', justifyContent:'center' }}>
                                        {item.title}
                                    </Typography>

                                    <Typography sx={{ fontSize: '12px', fontWeight: 'light' }}>
                                        {item.text}
                                    </Typography>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <Button sx={{
                                            backgroundColor: '#FF971E',
                                            color: '#fff',
                                            borderRadius: '8px',
                                            marginLeft: '20px',
                                            height: '35px',
                                            marginTop: '10px',
                                            fontSize: '10px',
                                            '&:hover': {
                                                backgroundColor: '#FFB55F',
                                                color: '#fff',
                                            },
                                        }} variant="contained">
                                            <Link to = {item.link} style={{textDecoration:'none', color:'#fff'}}>
                                            Know More
                                            </Link>
                                        </Button>
                                    </div>
                                </div>



                            </Grid>
                        </Box>
                    ))}
            </Container>

        </Box>
    )
}

export default OurServices