import React from 'react';
import Footer from '../Footer';
import './FastingSection.css';


function PrayerRequest(){
return(
    <>
     <img className='page-bg' src='/images/fasting2023/4kreso_bg_low_res.jpg' />
    <div align="center">
    <iframe className="form" src="https://docs.google.com/forms/d/e/1FAIpQLSfiWPGHYmLcAWxc4Ypbsw72wE2ieOxFDv5heanGHpO3278yOQ/viewform?embedded=true" >Loading…</iframe>
    </div>
    <Footer/>
    </>
)
}

export default PrayerRequest