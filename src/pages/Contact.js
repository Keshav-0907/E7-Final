import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { Box, Button, Container, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'





const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_scjv5zj",
                "template_c39nuf8",
                form.current,
                "O7o9l2BRkvU1eW-rz"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Your message has been sent successfully. We will contact you soon!')


                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: '#D5D5D5', paddingY: '30px' }} >
                <Typography sx={{ fontSize: '30px' }} >
                    Contact Us
                </Typography>
                <Typography sx={{fontSize:'10px'}}>
                Thank you for choosing to connect with us. We value your time and will reach to you as soon as possible.
                </Typography>
            </Box>

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

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Container sx={{
                    width: '50%',
                    '@media (max-width: 1200px)': {
                        display: 'none'
                    }

                }}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/666/231/original/3d-rendering-of-a-customer-service-illustration-call-center-online-customer-support-contact-us-customer-service-for-personal-assistant-service-3d-rendering-png.png" width="600px" alt="err" />
                </Container>

                <Container sx={{

                }}>
                    <Grid sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <form ref={form} onSubmit={sendEmail} className="form-main">
                            <label>First Name</label>
                            <input type="text" name="user_name" />
                            <label>Phone Number</label>
                            <input type="number" name="user_phone" />
                            <label>Email</label>
                            <input type="email" name="email" />
                            <label>Type of service:</label>
                            <select name="service" id="cars">
                                <option value="volvo">Please Select</option>
                                <option value="Amazon Account Management">Amazon Account Management</option>
                                <option value="Amazon Advertising">Amazon Advertising</option>
                                <option value="Flipkart Account Management">Flipkart Account Management</option>
                                <option value="Web Development">Web Development</option>
                            </select>
                            <label>Message</label>
                            <textarea name="message" />
                            <Button
                            type="submit"
                            value="Send"
                             sx={{
                                backgroundColor: '#FF971E',
                                color: '#fff',
                                margin: '20px',
                                borderRadius: '20px',
                                height: '45px',
                                '&:hover': {
                                    backgroundColor: '#FFB55F',
                                    color: '#fff',
                                },
                            }}>Submit</Button>

                        </form>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Contact;;

