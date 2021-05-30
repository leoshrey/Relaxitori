import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Turn off your mind, relax, and float downstream.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sleep.jpg'
              text='Sleep on it. Things will look better in the morning.'
              label='Sleep'
              path='/sleep'
            />
            <CardItem
              src='images/meditate-card.jpg'
              text='Quiet the mind, and the soul will speak.'
              label='Meditate'
              path='/music'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/eat-card.jpg'
              text='Health requires healthy food.'
              label='Eat'
              path='/music'
            />
            <CardItem
              src='images/exercise-card.jpg'
              text='Reading is to the mind what exercise is to the body.'
              label='Exercise'
              path='/sleep'
            />
            <CardItem
              src='images/talk-card.jpg'
              text='Dont hesitate, just talk'
              label='talk'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
