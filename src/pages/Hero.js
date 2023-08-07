import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import Services from './OurServices';
import Why from './Why';
import gif from '../Assets/gif 2.0.mp4';
import '../App.css'
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Amazon from '../Assets/Amazon.png'
import Ajio from '../Assets/Ajio.png'
import Flipkart from '../Assets/Flikart.png'
import FirstCry from '../Assets/FirstCry.png'
import JioMart from '../Assets/Jiomart.png'
import Meesho from '../Assets/Meesho.png'
import Myntra from '../Assets/Myntra.png'
import Nykaa from '../Assets/Nykaa.png'
import 'react-slideshow-image/dist/styles.css'
import { Slide, SlideshowRef } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useRef } from 'react';



const Hero = () => {

  const slideRef = useRef(null);


  useEffect(() => {
    AOS.init();
  })

  return (
    <>

      <div className="video-container">
        <video autoPlay loop muted >
          <source src={gif} type="video/mp4" />
        </video>

        <div className="caption">
          <div className='video-btn'>
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
            }} variant="contained">
              <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}>Get a Call from Us</Link>
            </Button>
          </div>
        </div>
      </div>



      <Services />
      <div className='company_data'>
        <Slide indicators={true} ref={slideRef} slidesToScroll={1} slidesToShow={1} duration='2000' canSwipe={true}>
          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%' }} className="each-slide-effect">
            <img className='company_img' src={Amazon} alt='err'></img>
          </div>

          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%'}} className="each-slide-effect">
            <img className='company_img' src={Ajio} alt='err'></img>
          </div>

          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%'}} className="each-slide-effect">
            <img className='company_img' src={Flipkart} alt='err'></img>
          </div>

          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%'}} className="each-slide-effect">
            <img className='company_img' src={FirstCry} alt='err'></img>
          </div>
          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%' }} className="each-slide-effect">
            <img className='company_img' src={JioMart} alt='err'></img>
          </div>
          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%' }} className="each-slide-effect">
            <img className='company_img' src={Meesho} alt='err'></img>
          </div>
          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%'}} className="each-slide-effect">
            <img className='company_img' src={Myntra} width='300px' alt='err'></img>
          </div>
          <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', height:'100%' }} className="each-slide-effect">
            <img className='company_img' src={Nykaa} alt='err'></img>
          </div>
        </Slide>
      </div>
      <Testimonials />
      <Why />
    </>
  )
}

export default Hero