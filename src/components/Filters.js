import React, { useState } from 'react';

const filters = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Filters = () => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div>
      <ul className="flex justify-center space-x-10">
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'bg-orange-500' : ''}>
          <button>Все</button>
        </li>
        {filters &&
          filters.map((items, idx) => (
            <ul key={idx}>
              <li
                onClick={() => onSelectItem(idx)}
                className={activeItem === idx ? 'bg-orange-500' : ''}>
                <button>{items}</button>
              </li>
            </ul>
          ))}
      </ul>
    </div>
  );
};

export default Filters;
