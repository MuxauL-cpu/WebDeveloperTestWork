import React from 'react';
import './DropDown.css';

function DropDown({ selected, setSelected }) {
  const instrument = ['USD/RUB', 'EUR/RUB', 'RUB/USD', 'RUB/EUR'];
  const [isActive, setActive] = React.useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setActive(!isActive)}>
        {selected !== '' ? selected : 'Выберите актив'}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {instrument.map((value, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(value);
                setActive(false);
              }}
              className="dropdown-item">
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
