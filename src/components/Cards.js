import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Video from './Video'

function Cards() {
  return (
    <div className='cards'>
      <h1>Watch Our Recorded Messages</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
          <CardItem
                      text='We remember God’s faithfulness, as we look at God’s Story in the lives of the Israelites, and in our lives.'
              label=''
       
            />
      
          </div>  
        </div>


      </div>
    </div>
  );
}

export default Cards;
