import React from 'react';
import Footer from '../Footer';
import './volunteer.css'
import MinistryTile from './MinistryTile';


function Volunteer(){
return(
    <>
    <br/>
    <br/>
    <div className='page-header'>
    <h1>Join any of these ministry teams:</h1>
    <br/>
    <p>Please select a maximum of 2</p>
    </div>
    
     <div className='tiles-wrapper'>
        <MinistryTile/>
     </div>
   
    </>
)
}

export default Volunteer