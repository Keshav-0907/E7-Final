/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser'
import { Box, Button, Container, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import qr from '../Assets/QRu.jpeg'
import '../App.css';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from '@maptiler/sdk';
import { Map } from '@maptiler/sdk';


// maptilersdk.config.apiKey = 'AqEzWnD35d6jlMJVxB5R';

// var monument = [-77.0353, 38.8895];
//     var map = new maptilersdk.Map({
//         container: 'map',
//         style: maptilersdk.MapStyle.STREETS,
//         center: monument,
//         zoom: 15
//     });

//     // create the popup
//     var popup = new maptilersdk.Popup({ offset: 25 }).setText(
//         'Construction on the Washington Monument began in 1848.'
//     );

//     // create DOM element for the marker
//     var el = document.createElement('div');
//     el.id = 'marker';

//     // create the marker
//     new maptilersdk.Marker(el)
//         .setLngLat(monument)
//         .setPopup(popup) // sets a popup on this marker
//         .addTo(map);



const Contact = () => {

    const form = useRef(null);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwzXF8qH-5xiPq7BdNPyV2W7UW4CcI7YT2gaLFRxD8o4yU28Q9L2UEZAJIe7Nw-gwC8/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(form.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            alert('Your message has been sent successfully. We will contact you soon!')
            setLoading(false)
        })

            .catch(err => console.log(err))

    }


    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm(
    //             "service_pb9hapv",
    //             "template_fbi8scr",
    //             form.current,
    //             "F4-cL2_b52u2Ir2oI"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //                 alert('Your message has been sent successfully. We will contact you soon!')


    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );
    // };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: '#D5D5D5', paddingY: '30px' }} >
                <Typography sx={{ fontSize: '30px' }} >
                    Contact Us
                </Typography>
                <Typography sx={{ fontSize: '10px' }}>
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
                '@media (max-width: 1200px)': {
                    display: 'flex',
                    flexDirection: 'column-reverse'
                }
            }}>


                <Container sx={{
                    width: '50%',
                    justifyContent: 'center',




                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', paddingTop: '20px' }} >
                        <Typography sx={{
                            fontSize: '25px', '@media (max-width: 1200px)': {
                                fontSize: '15px'
                            }
                        }} >
                            7 E-tech Business Services
                        </Typography>
                        <Typography sx={{
                            fontSize: '15px', '@media (max-width: 1200px)': {
                                fontSize: '10px'
                            }
                        }}>

                            Scan to Contact Us on WhatsApp

                        </Typography>
                    </Box>
                    <img src={qr} alt="err" className="contact-image" />
                </Container>


                <Container sx={{

                }}>
                    <Grid sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <form ref={form} onSubmit={handleSubmit} className="form-main">
                            <label>First Name *</label>
                            <input type="text" name="Name" required />
                            <label >Phone Number *</label>
                            <input type="number" name="Phone" required />
                            <label>Email </label>
                            <input type="email" name="Email" />
                            <label>Type of service:</label>
                            <select name="Services" id="cars" required>
                                <option >Please Select</option>
                                <option value="Legal Document Support">Legal Document Support</option>
                                <option value="Set-Up your E-Commerce Bussiness">Set-Up your E-Commerce Bussiness</option>
                                <option value="Imaging and Cataloging Services">Imaging and Cataloging Services</option>
                                <option value="Grow your E-Commerce">Grow your E-Commerce</option>
                                <option value="Other">Other</option>
                            </select>
                            <label>Message</label>
                            <textarea name="Message" />
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

            
            {/* <div id='map'>
            </div> */}

        </>
    );
};

export default Contact;