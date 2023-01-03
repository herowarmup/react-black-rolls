import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import RollBlock from './components/RollBlock';
import Skeleton from './components/RollBlock/Skeleton';

// import rolls from './assets/rolls.json';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63aafafbfdc006ba6051e61a.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        //sss
        ///sss
        ///sssы
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
            {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <RollBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
