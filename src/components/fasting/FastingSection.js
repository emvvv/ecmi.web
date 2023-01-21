import React from 'react';
import Footer from '../Footer';
import './FastingSection.css';
import Fasting from './Fasting';



function FastingSection() {
  return (
    <>
      <img className='page-bg' src='/images/fasting2023/4kreso_bg_low_res.jpg' />
        <Fasting/>
        <Footer/>
    </>
  );
}

export default FastingSection;
