import React from 'react';
import './Cards.css';
import CardItem from './CardItems';
import universityCampus from "../Images/university_cm.jpeg";
import universityHockey from '../Images/university_hockey.jpeg';
import universityRes from '../Images/university_res.jpeg';
import universityLibrary from '../Images/university_library.jpeg';
import university1 from '../Images/university_1.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what our beautiful campus has to offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {universityCampus}
              text='Explore the life around campus'
              label='Explore'
              path='/campus'
            />
            <CardItem
              src= {universityHockey}
              text='Watch the teams play!'
              label='Sports'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {universityRes}
              text='Live with your friends'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src= {universityLibrary}
              text='Find places to study!'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src= {university1}
              text='With so many activities to do all around campus, stay busy!'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;