import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Video from './Video'

function Cards() {
  return (
    <div className='cards'>
      <h1>Watch Our Latest Message</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
          <CardItem
                      text={""} label=''/>
      
          </div>  
        </div>


      </div>
    </div>
  );
}

export default Cards;
