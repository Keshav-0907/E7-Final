import React from 'react';
import { Button } from '@mui/material';
import Services from './OurServices';
import Why from './Why';
import gif from '../Assets/gif 2.0.mp4';
import '../App.css'
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';

const Hero = () => {
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
      <Testimonials/>
      <Why />
    </>
  )
}

export default Hero