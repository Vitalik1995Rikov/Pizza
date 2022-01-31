import React from 'react';

const filters = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

class Filters extends React.Component {
  state = {
    activeItem: null,
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index,
    });
  };

  render() {
    return (
      <div>
        <ul className="flex justify-center space-x-10">
          {filters.map((items, idx) => (
            <li
              key={idx}
              onClick={() => this.onSelectItem(idx)}
              className={this.state.activeItem === idx ? 'bg-orange-500' : ''}>
              <button>{items}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// const Filters = ({ onClickItem }) => {
//   return (
//     <div>
//       <ul className="flex justify-center space-x-10">
//         {filters.map((items, idx) => (
//           <ul key={idx}>
//             <li onClick={() => onClickItem(items)} className="space-x-2">
//               <button>{items}</button>
//             </li>
//           </ul>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default Filters;
