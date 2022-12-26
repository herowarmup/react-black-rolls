import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import RollBlock from './components/RollBlock';

import './scss/app.scss';

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
            <RollBlock title='BLACK-ROLL С ЛОСОСЕМ' price='350' />
            <RollBlock title='BLACK-ROLL С УГРЕМ' price='390' />
            <RollBlock title='BLACK-ROLL С КРЕВЕТКОЙ' price='370' />
            <RollBlock title='ЯПОНСКИЙ ДРАКОН' price='400' />
            <RollBlock title='БЕЗ РИСА С ЛОСОСЕМ' price='500' />
            <RollBlock title='БЕЗ РИСА С КРЕВЕТКОЙ' price='540' />
            <RollBlock title='БЕЗ РИСА С КРАБОМ' price='550' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
