import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Messages from './components/pages/Messages';
import About from './components/pages/About';
import Media from './components/pages/Media';
import FastingSection from './components/fasting/FastingSection'
import PrayerRequest from './components/fasting/PrayerRequest';
import Volunteer from './components/ministryfair/Volunteer';
import Signup from './components/ministryfair/Signup';



function App() {
  return (
    <>
      <Router>
        <Navbar />
    

        <Routes>
              
          <Route path='/' exact element={<Home/>} />
          <Route path='/fasting2024' exact element={<FastingSection/>} />
          <Route path='/PrayerRequest' exact element={<PrayerRequest/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/messages' element={<Messages/>} />
          <Route path='/media' element={<Media/>}/>
          <Route path='/volunteer' element={<Volunteer/>}/>
          <Route path='/volunteer/signup' element={<Signup/>}/>

        </Routes>
      </Router>

    </>
  );
}

export default App;
