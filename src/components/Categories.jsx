import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Черные', 'Большие', 'Малые', 'Без риса', 'Острые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((value, i) => (
          <li key={i} onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
