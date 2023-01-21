import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Messages from './components/pages/Messages';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Media from './components/pages/Media';
import FastingSection from './components/fasting/FastingSection'
import PrayerRequest from './components/fasting/PrayerRequest';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/fasting2023' exact element={<FastingSection/>} />
          <Route path='/PrayerRequest' exact element={<PrayerRequest/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/messages' element={<Messages/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/media' element={<Media/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
