import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import RollBlock from './components/RollBlock';

import './scss/app.scss';

function App() {
  return (
    <div class='wrapper'>
      <Header />
      <div class='content'>
        <div class='container'>
          <div class='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 class='content__title'>Все роллы</h2>
          <div class='content__items'>
            <RollBlock title='BLACK-ROLL С ЛОСОСЕМ' price='350' />
            <RollBlock title='BLACK-ROLL С УГРЕМ' price='390' />
            <RollBlock title='BLACK-ROLL С КРЕВЕТКОЙ' price='370' />
            <RollBlock title='ЯПОНСКИЙ ДРАКОН' price='400' />
            <RollBlock title='БЕЗ РИСА С ЛОСОСЕМ' price='500' />
            <RollBlock title='БЕЗ РИСА С КРЕВЕТКОЙ' price='540' />
            <RollBlock title='БЕЗ РИСА С КРАБОМ' price='550' />
            <RollBlock title='БЕЗ РИСА С СЫРОМ' price='450' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
