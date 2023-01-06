import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Watch Our Recorded Messages</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/series/remember.jpg'
              text='We remember God’s faithfulness, as we look at God’s Story in the lives of the Israelites, and in our lives.'
              path='/media'
            />
            <CardItem
              src='images/img-2.jpg'
              text='We remember God’s faithfulness, as we look at God’s Story in the lives of the Israelites, and in our lives.'
              label=''
              path='/messages'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/series/remember.jpg'
              text='We remember God’s faithfulness, as we look at God’s Story in the lives of the Israelites, and in our lives.'
              label=''
              path='/messages'
            />
            <CardItem
              src='images/img-4.jpg'
              text='We remember God’s faithfulness, as we look at God’s Story in the lives of the Israelites, and in our lives.'
              label='Adventure'
              path='/messages'
            />
            <CardItem
              src='images/img-8.jpg'
              text='We remember God’s faithfulness, as we look at God’s Story in the lives of the Israelites, and in our lives.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
         
        </div>
        <h2>See more</h2>
      </div>
    </div>
  );
}

export default Cards;
