import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Restaurants!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/4.jpg'
              text='THE DESI DELI'
              ratings=' 4.5'
              label='Pizzas, Italians,American'
              path='/products'
            />
            <CardItem
              src='images/5.jpg'
              text='THE NCR CAFE'
              ratings=' 4.5'
              label='N-Indain,Chinese,Indian'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/6.jpg'
              text='BIRIYANI BLUES'
              ratings='3.5'           
              label='Hyderabadi,Lucknowi'
              path='/products'
            />
            <CardItem
              src='images/7.jpg'
              text='BHUKKAD CHOUPAL'
              ratings='4.7'            
              label='Chinese,Mughlai'
              path='/products'
            />
            <CardItem
              src='images/8.jpg'
              text='MAGADH FLAVOUR'
              ratings='3.9'
              label='Mughlai,Chinese'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;