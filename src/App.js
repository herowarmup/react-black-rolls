import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import RollBlock from './components/RollBlock';

// import rolls from './assets/rolls.json';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63aafafbfdc006ba6051e61a.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

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
            {items.map((rolls) => (
              <RollBlock key={rolls.id} {...rolls} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
