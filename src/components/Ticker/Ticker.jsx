import React from 'react';
import './Ticker.css';
import DropDown from '../DropDown/DropDown';
import useFormValidation from '../../utils/useFormValidation';

function Ticker() {
  const RATES = {
    'USD/RUB': 93.41,
    'EUR/RUB': 101.01,
    'RUB/USD': 0.011,
    'RUB/EUR': 0.01,
  };

  const RATES_SELL = {
    'USD/RUB': 91.5,
    'EUR/RUB': 99.3,
    'RUB/USD': 0.01,
    'RUB/EUR': 0.009,
  };

  const [selected, setSelected] = React.useState('');
  const [resultBuy, setResultBuy] = React.useState(0);
  const [resultSell, setResultSell] = React.useState(0);
  const { values, onChange } = useFormValidation();

  const convert = async (inputValue, selected) => {
    setResultBuy((inputValue * RATES[selected]).toFixed(3));
    setResultSell((inputValue * RATES_SELL[selected]).toFixed(3));
  };

  React.useEffect(() => {
    convert(values.sum, selected);
  }, [values.sum, selected]);

  return (
    <section className="ticker">
      <DropDown selected={selected} setSelected={setSelected} />
      <input
        className="ticker__input"
        name="sum"
        minLength={1}
        onChange={onChange}
        value={values.sum || ''}
        required
      />
      <div className="ticker__container">
        <div className="ticker__container-button">
          <p className="ticker__container-text">{resultSell}</p>
          <button className="ticker__button ticker__button_sell">Sell</button>
        </div>
        <div className="ticker__container-button">
          <p className="ticker__container-text">{resultBuy}</p>
          <button className="ticker__button ticker__button_buy">Buy</button>
        </div>
      </div>
    </section>
  );
}

export default Ticker;
