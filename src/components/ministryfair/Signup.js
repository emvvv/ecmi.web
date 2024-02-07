import React from 'react';
import Footer from '../Footer';
import '../fasting/FastingSection.css';


function Signup(){
return(
    <>
     <img className='page-bg' src='/images/ministry_fair.jpg' />
    <div align="center">
    <iframe className="form" src="https://docs.google.com/forms/d/e/1FAIpQLScA1Vr5sWoPioNRhL0Etfs6M_Um760nH_rIG5JgvWx92xWMgg/viewform?embedded=true">Loading…</iframe>
    {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScA1Vr5sWoPioNRhL0Etfs6M_Um760nH_rIG5JgvWx92xWMgg/viewform?embedded=true" width="640" height="1411" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    </div>
    <Footer/>
    </>
)
}

export default Signup