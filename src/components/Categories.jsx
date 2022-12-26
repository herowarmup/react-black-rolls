import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Черные', 'Большие', 'Малые', 'Без риса', 'Острые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className='categories'>
      <ul>
        {categories.map((value, index) => (
          <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
