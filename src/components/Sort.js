import React from 'react';
import { useState } from 'react';

const Sort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  console.log(visiblePopup);
  return (
    <div>
      <span>Сортировка по:</span>
      <span onClick={() => setVisiblePopup(!visiblePopup)}>популярности</span>
      <ul className={visiblePopup ? 'hidden' : ''}>
        <li>популярности</li>
        <li>алфавиту</li>
        <li>цене</li>
      </ul>
    </div>
  );
};

export default Sort;
