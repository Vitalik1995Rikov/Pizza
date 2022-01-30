import React from 'react';

const filters = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Filters = () => {
  return (
    <div>
      <ul className="flex justify-center space-x-10">
        {filters.map((items) => (
          <ul>
            <li className="space-x-2">
              <button>{items}</button>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
