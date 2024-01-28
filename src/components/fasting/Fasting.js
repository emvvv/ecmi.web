import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FastingSection.css';

function Fasting() {
  let link = "https://www.youtube.com/embed/g46FKXz9a0E"
  const [isMonday ,setisMonday] = useState(true);
  const [isTuesday, setisTuesday] = useState(false);
  const [isWednesday, setisWednesday] = useState(false);
  const [isThursday, setisThursday] = useState(false);
  const [isFriday, setisFriday] = useState(false);
  const [isSaturday, setisSaturday] = useState(false);
  const [isSunday, setisSunday] = useState(false);

  const[devotionVideo,setDevotionVideo] = useState(link);

  const monday = () => {
    clearButtons()
    setisMonday(true);
    setDevotionVideo(link)
  };
  const tuesday = () => {
    clearButtons()
    setisTuesday(true);
    setDevotionVideo("https://www.youtube.com/embed/0TD6XVNgnsQ")
  };
  const wednesday = () => {
    clearButtons()
    setisWednesday(true);

    setDevotionVideo("https://www.youtube.com/embed/0mxOOzBvshE")
  };
  const thursday = () => {
    clearButtons()
    setisThursday(true);
    setDevotionVideo("https://www.youtube.com/embed/HzYu1VqpDC0")
  };

  
  const friday = () => {
    clearButtons()
    setisFriday(true);
    setDevotionVideo("https://www.youtube.com/embed/AiR61QWmMow")
  };
  const saturday = () => {
    clearButtons()
    setisSaturday(true);
     setDevotionVideo("https://www.youtube.com/embed/-dEegbVqXs0")
  };
  const sunday = () => {
    clearButtons()
    setisSunday(true);
    setDevotionVideo("https://www.youtube.com/embed/zaUpevABK-k")
  };
  
const clearButtons =()=>{
  setisMonday(false);
  setisTuesday(false);
  setisWednesday(false);
  setisThursday(false);
  setisFriday(false);
  setisSaturday(false)
  setisSunday(false);
};


 
  return (
    <>
      <img className='page-bg' src='/images/fasting2023/4kreso_bg_low_res.jpg' />
      <div className='f-hero-container'>
        <img className="title" src='/images/fasting2023/title_copy.png' />
        <br />
        <br />
        <h1>EMMANUEL IN ONE ACCORD</h1>
        <h2>A 7-DAY PRAYER AND FASTING</h2>
      </div>

      <div className='prayer-fasting-container '>
        <p className='p-center'>
        As we face tremendous and extraordinary obstacles in knowing Christ, being like Him, and making Him known we are determined to pursue whatever it takes and whatever it costs us.
        </p>
        <br />
        <br />
        <p className='p-center'>
        The challenge of 2023 calls on every Emmanuelites to be united in prayer and fasting. This is the time of the year when we corporately consecrate ourselves, our families, and ministries to God. Believe God for victories and breakthroughs...
        </p>

        <br />
        <br />
        <p className='p-center bold'>
          Now is the time to be an extraordinary Christian!
          <br />
          Now is the time to get involved!
          <br />
          Now is the time to pray for the Church!
          <br />
        </p>
        <br />

        <br />
        <p className='p-center'>
        The Lord is ready to do great and amazing things for us this year. As we begin our 7 Days of Prayer & Fasting, believe in your heart and receive God’s answer. The Lord is ready to crown our year with bountiful harvest; even the hard pathways overflow with abundance.

        </p>
        <br />
        <br />
        <p className='p-left'>
          JOSHUA 3:5
        </p>
        <p className='p-center'>
          <em>“...Consecrate yourselves, for tomorrow the Lord will do amazing things among you.”
          </em>
        </p>
      </div>

      <br />
      <br />
      <br />
      <br />
      <img className='img-left' alt="step1" src='/images/fasting2023/step1.png' />
      <br />
      <br />
      <br />
      <div className='prayer-fasting-container '>
        <p className='p-left'>
          <br />
          Fasting must always, first and  foremost, center on God. It must be about Him...
          <br />
          <br />
          Why are you fasting? Ask the Holy Spirit to clarify His leading and objectives for your fasting. This will enable you to pray more specifically and strategically. Fasting is God-led and God-initiated. He fuels a desire to fast and pray. God loves it when we fast.

        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img className='img-left' alt="step2" src='/images/fasting2023/step2.png' />
      <br />
      <br />
      <br />
      <br />
      <div className='prayer-fasting-container '>
        <p className='p-left'>
        Pray the kind of fast you should undertake. Before you fast decide the following:
          <br />
          <br />
          <ul>
            <li>
              Decide how long you will fast – one meal, one week, several weeks, certain days, or skip meal.
            </li>
            <br />
            <li>
              The type of fast God wants you to undertake.
            </li>
            <br />
            <li>
              What physical or social activities you will restrict.
            </li>
            <br />
            <li>
              How much time each day you will devote to prayer and God's Word.
            </li>
          </ul>
          <br />
          <br />
         Making these commitments ahead of time will help you sustain your fast when physical temptations and life's pressures tempt you to abandon it.
          <br />
         
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <img className='img-left' alt="step3" src='/images/fasting2023/step3.png' />
      <br />
      <br />
      <br />
      <br />
      <div className='prayer-fasting-container '>

        <p className='p-left'>
        Fasting is not a spur-of-the-moment thing. It is planned. We must prepare. The very foundation of fasting and prayer is repentance. Unconfessed sin can hinder your prayers. There are several things you can do to prepare yourself.
          <br />
          <br />
          <ul>
            <li>
              Fasting requires reasonable precautions. Consult a doctor if you have a chronic ailment or taking a prescription medication.
            </li>
            <br />
            <li>
              Do not rush into your fast. Prepare your body. Eat smaller meals before starting a fast. Avoid high fat and sugar foods. Eating raw fruit and vegetables prior to your fast is helpful. Physical preparation makes the drastic change in your eating routine a easier so that you can turn your full attention to the Lord in prayer.</li>
            <br />
            <li>
              Confess every sin that the Holy spirit calls you to remembrance.
            </li>
            <br />
            <li>
              Submit to what the Holy Spirit will teach during the prayer and fasting time.
            </li>
            <li>
              Begin your time of prayer and fasting with an expectant heart.
            </li>
            <br />
            <li>
              Do not underestimate spiritual opposition. It will be helpful to bind in Jesus name the work of the enemy during the prayer and fasting time.
            </li>
            <br />
          </ul>
        </p>
      </div>
      <br />
      <br />
      <br />

      <br />
      <a  href="https://bit.ly/ECMIPF2023" target="_blank">
      <button className='btn-wide'> DOWNLOAD THE COMPLETE ECMI FASTING 2023 GUIDE HERE  </button>
      </a>
      <br />
      <br />
      <br />
      <br />

      <h1 className='section-header'>MORNING WATCH DEVOTIONALS</h1>
      <div className='fasting-video-wrapper'>
        <iframe
          src={`${devotionVideo}`}
          title="January 8 2023 Service"
          allowFullScreen />
      </div>
      <div className='btn-grp'>
        <button  onClick ={monday} className={`btn-small ${(isMonday === false)? '' : 'btn-active' }`}>JANUARY 23</button>
        <button  onClick ={tuesday} className={`btn-small ${(isTuesday === false)? '' : 'btn-active' }`}>JANUARY 24</button>
        <button onClick ={wednesday}  className={`btn-small ${(isWednesday === false)? '' : 'btn-active' }`}>JANUARY 25</button>

        <button  onClick ={thursday} className={`btn-small ${(isThursday === false)? '' : 'btn-active' }`}>JANUARY 26</button>
        <button onClick ={friday}  className={`btn-small ${(isFriday === false)? '' : 'btn-active' }`} >JANUARY 27</button>
        <button onClick ={saturday} className={`btn-small ${(isSaturday === false)? '' : 'btn-active' }`}>JANUARY 28</button>
        <button  onClick ={sunday} className={`btn-small ${(isSunday === false)? '' : 'btn-active' }`}>JANUARY 29</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className='section-header'>SEND US YOUR PRAYER REQUEST</h1>
      <br />
      <br />
      <br />
      <Link to="/PrayerRequest"><button className='btn-pray'>PRAY FOR ME</button> </Link>
      <br />
      <br />
      <br />
    </>

  )
};

export default Fasting;
