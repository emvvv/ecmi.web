import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  let currentYear =  new Date().getFullYear();

  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'> */}
        {/* <p className='footer-subscription-heading'>
          Be a part of the ECMI family
        </p> */}
        {/* <p className='footer-subscription-text'>
          Let us know you
        </p> */}
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Sign Up</Button>
          </form>
        </div> */}
      {/* </section> */}
      {/* <div className='footer-links'>
        <div className='footer-link-wrapper'>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div> */}
      <section className='social-media'>
        <div className='social-media-wrap'>
         
            {/* <Link to='/fasting2023' className='social-logo'>
            <img className='navbar-logo' src='/icons/ecmi-logo.png' width='100px' height='70px'></img>
            </Link>
        */}
          <small className='website-rights'>ECMI © {currentYear} </small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/officialecmimakati'
              target='_blank'
              rel="noopener noreferrer" 
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/ecmi_makati/'
              target='_blank'
              rel="noopener noreferrer" 
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            
              <a className='social-icon-link youtube'
              href='https://www.youtube.com/@ecmimakati'
              target='_blank'
              rel="noopener noreferrer" 
              aria-label='Youtube'>
              <i className='fab fa-youtube' />
              </a>
           


          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
