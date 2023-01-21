import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' >
          <iframe className='cards__item__img' 
          src="https://www.youtube.com/embed/sxx661yAJwU" 
          title="YouTube video player" 
          frameborder="0" allowFullScreen></iframe>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>





    </>
  );
}

export default CardItem;
