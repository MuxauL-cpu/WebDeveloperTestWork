import React from 'react';
import './Ticker.css';
import DropDown from '../DropDown/DropDown';

function Ticker() {
  const [selected, setSelected] = React.useState('');
  return (
    <section className="ticker">
      <DropDown selected={selected} setSelected={setSelected} />
      <input className="ticker__input" />
      <div className="ticker__container">
        <div className="ticker__container-button">
          <p></p>
          <button className="ticker__button ticker__button_sell">Sell</button>
        </div>
        <div className="ticker__container-button">
          <button className="ticker__button ticker__button_buy">Buy</button>
        </div>
      </div>
    </section>
  );
}

export default Ticker;
