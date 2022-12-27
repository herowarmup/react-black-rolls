import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import RollBlock from './components/RollBlock';

import rolls from './assets/rolls.json';

import './scss/app.scss';

console.log(rolls);

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все роллы</h2>
          <div className='content__items'>
            {rolls.map((rolls) => (
              <RollBlock title={rolls.title} price={rolls.price} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
