import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    
    <div className='hero-container'>
              <img class="bg-cover" src='/images/new_bg.jpg' />
      <h1>Love God, Love People</h1>
      {/* <h2>Emmanuel In One Accord</h2> */}

      <div className='hero-btns'>
      <Link to='/fasting2024' className='btn-mobile'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          2024 Prayer and Fasting
        </Button>
      </Link>
    
        <Link to='/volunteer' className='btn-mobile'>
       <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          JOIN THE MINISTRY<i className='far fa-play-circle' />
        </Button>
        </Link>
      </div> 
    </div>
  );
}

export default HeroSection;
