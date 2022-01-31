import React from 'react';
import { useState } from 'react';

const Sort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const toogleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <div>
      <span>Сортировка по:</span>
      <span onClick={toogleVisiblePopup}>популярности</span>
      {visiblePopup && (
        <ul>
          <li>популярности</li>
          <li>алфавиту</li>
          <li>цене</li>
        </ul>
      )}
    </div>
  );
};

export default Sort;
