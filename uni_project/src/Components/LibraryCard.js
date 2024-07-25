import React from 'react'
import './LibraryCard.css';

function LibraryCard({image, name, location, hours, description}){
    return(
        <div className='library-card'>
        <img src={image} alt={`${name} library`} className='library-card__image' />
        <div className='library-card__content'>
          <h3 className='library-card__name'>{name}</h3>
          <p className='library-card__location'>{location}</p>
          <p className='library-card__hours'>{hours}</p>
          <p className='library-card__description'>{description}</p>
        </div>
      </div>
    );
  }
  
  export default LibraryCard;