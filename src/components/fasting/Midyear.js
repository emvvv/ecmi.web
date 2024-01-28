import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FastingSection.css';

function MidyearFasting() {
  let link = "files/pdfs2024/pfguide.pdf"
  const [isGuide, setisGuide] = useState(true);
  const [isMonday ,setisMonday] = useState(false);
  const [isTuesday, setisTuesday] = useState(false);
  const [isWednesday, setisWednesday] = useState(false);
  const [isThursday, setisThursday] = useState(false);
  const [isFriday, setisFriday] = useState(false);
  const [isSaturday, setisSaturday] = useState(false);
  const [isSunday, setisSunday] = useState(false);


  const[devotionVideo,setDevotionVideo] = useState(link);

  const currentDate = new Date().toLocaleDateString();
  const guide =()=>{
    clearButtons()
    setisGuide(true);
    setDevotionVideo(link)
  }
  const monday = () => {
    clearButtons()
    setisMonday(true);
    setDevotionVideo("files/pdfs2024/day1.pdf")
  };
  const tuesday = () => {
    clearButtons()
    setisTuesday(true);
    setDevotionVideo("files/pdfs2024/day2.pdf")
  };
  const wednesday = () => {
    clearButtons()
    setisWednesday(true);

    setDevotionVideo("files/pdfs2024/day3.pdf")
  };
  const thursday = () => {
    clearButtons()
    setisThursday(true);
    setDevotionVideo("files/pdfs2024/day4.pdf")
  };

  
  const friday = () => {
    clearButtons()
    setisFriday(true);
    setDevotionVideo("files/pdfs2024/day5.pdf")
  };
  const saturday = () => {
    clearButtons()
    setisSaturday(true);
     setDevotionVideo("files/pdfs2024/day6.pdf")
  };
  const sunday = () => {
    clearButtons()
    setisSunday(true);
    setDevotionVideo("files/pdfs2024/day7.pdf")
  };
  
const clearButtons =()=>{
  setisGuide(false);
  setisMonday(false);
  setisTuesday(false);
  setisWednesday(false);
  setisThursday(false);
  setisFriday(false);
  setisSaturday(false)
  setisSunday(false);
};

useEffect(() => {
  const adjustZoom = () => {
    const iframe = document.getElementById('pdf-iframe');

    if (iframe) {
      const contentWindow = iframe.contentWindow || iframe.contentDocument.defaultView;
      const pageWidth = contentWindow.document.documentElement.scrollWidth;
      const containerWidth = iframe.offsetWidth;
      const zoomPercentage = (containerWidth / pageWidth) * 100;

      iframe.style.zoom = `${zoomPercentage}%`;
    }
  };

  window.addEventListener('resize', adjustZoom);
  adjustZoom();

  return () => {
    window.removeEventListener('resize', adjustZoom);
  };
}, []);
 
  return (
    <>
    
      <img className='page-bg' src='\images\fasting2024\lowwebsite_BG3.jpg'/>
      <div className='f-hero-container'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <img className="title" src='\images\fasting2024\website_title_subtext.png' />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    
      </div>
      


      

      <br />
      <h1 className='section-header'>MORNING READ DEVOTIONALS</h1>

        <br />
        <br />
        <p className='p-center'>
          <a href='https://drive.google.com/file/d/1b5OH33WHVDYI8Y92Sp5jrhzU4CNU557e/view?' target='_blank'>Download Mobile Copy</a>
          <a href='https://drive.google.com/file/d/1-tqY-Z7CTDcsrarRENyT1g3je--_Qade/view?usp=drive_link' target='_blank'> Download Printable Copy</a>

        </p>
        <br />
        <br />
      <div className='btn-grp'>
       <button  onClick ={guide} className={`btn-small ${(isGuide === false)? '' : 'btn-active' }`} >Guide to fasting</button>
        <button  onClick ={monday} className={`btn-small ${(isMonday === false)? '' : 'btn-active' }`} disabled={currentDate >= '1/22/2024' ?  false : true}>Day 1</button>
        <button  onClick ={tuesday} className={`btn-small ${(isTuesday === false)? '' : 'btn-active' }`} disabled={currentDate >= '1/23/2024' ?  false : true}>Day 2</button>
        <button onClick ={wednesday}  className={`btn-small ${(isWednesday === false)? '' : 'btn-active' }`} disabled={currentDate >= '1/24/2024' ?  false : true}>Day 3</button>

        <button  onClick ={thursday} className={`btn-small ${(isThursday === false)? '' : 'btn-active' }`} disabled={currentDate >= '1/25/2024' ?  false : true}>Day 4</button>
        <button onClick ={friday}  className={`btn-small ${(isFriday === false)? '' : 'btn-active' }`} disabled={currentDate >= '1/26/2024' ?  false : true}>Day 5</button>
        <button onClick ={saturday} className={`btn-small ${(isSaturday === false)? '' : 'btn-active' }`} disabled={currentDate >= '1/27/2024' ?  false : true}>Day 6</button>
        <button  onClick ={sunday} className={`btn-small ${(isSunday === false)? '' : 'btn-active' }`} disabled={currentDate >= '1/28/2024' ?  false : true}>Day 7</button>
      </div>
      <br />
      <br />
      <br />
    
      <div className='pdfwrapper'>
      <iframe id='pdf-iframe'  class="pdfviewer"
          src={`${devotionVideo}`}
          title="PDF files"
          width="80%" height="90vh"
           />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className='section-header'>SEND US YOUR PRAYER REQUEST</h2>
      <br />
      <br />
      <br />
      <Link to="/PrayerRequest"><button className='btn-pray'>PRAY FOR ME</button> </Link>
      <br />
      <br />

      <div class='img-wrapper'>
       <p className='p-center'>Download Spotify and listen to our "Anointing" Playlist, with songs that were prayerfully selected to help us position our hearts in a state of worship.</p>
    
      </div>
      <div class="spotify-container">
    <iframe
      class="spotify-iframe"
      src="https://open.spotify.com/embed/playlist/6vRmep8o23GtNvpNJ6H5Uy?utm_source=generator"
      frameborder="{0}"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>

      <br />


      <br />
      <br />
     
    </>

  )
};

export default MidyearFasting;
