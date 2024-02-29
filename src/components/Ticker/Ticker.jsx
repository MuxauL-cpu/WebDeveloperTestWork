import React from 'react';
import './Ticker.css';
import DropDown from '../DropDown/DropDown';
import useFormValidation from '../../utils/useFormValidation';
import { initialResponse } from '../../utils/initialResponse';
import { RATES, RATES_SELL } from '../../utils/RATES';
import useDate from '../../utils/useDate';

function Ticker({ addAplication }) {
  const [selected, setSelected] = React.useState('');
  const [resultBuy, setResultBuy] = React.useState(0);
  const [resultSell, setResultSell] = React.useState(0);
  const { values, onChange, resetForm } = useFormValidation();
  const { getDate, getDelayedDate } = useDate();

  const getRandomItem = () => {
    const randomNumber = Math.floor(Math.random() * initialResponse.length);
    setTimeout(3000);
    return initialResponse[randomNumber];
  };

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
          <p className="ticker__container-text">{resultSell === 'NaN' ? '0.000' : resultSell}</p>
          <button
            disabled={!values.sum}
            onClick={() => {
              resetForm();
              getRandomItem();
              addAplication(
                values.sum,
                resultSell,
                'sell',
                selected,
                getRandomItem(),
                getDate(),
                getDelayedDate(),
              );
            }}
            className="ticker__button ticker__button_sell">
            Sell
          </button>
        </div>
        <div className="ticker__container-button">
          <p className="ticker__container-text">{resultBuy === 'NaN' ? '0.000' : resultBuy}</p>
          <button
            disabled={!values.sum}
            onClick={() => {
              resetForm();
              getRandomItem();
              addAplication(
                values.sum,
                resultSell,
                'buy',
                selected,
                getRandomItem(),
                getDate(),
                getDelayedDate(),
              );
            }}
            className="ticker__button ticker__button_buy">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ticker;
