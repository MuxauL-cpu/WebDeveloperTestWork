import React from 'react';
import './App.css';
import Ticker from '../Ticker/Ticker';
import Table from '../Table/Table';
import { api } from '../../utils/Api';

function App() {
  const [applications, setApplications] = React.useState([]);

  React.useEffect(() => {
    api.getApplications().then((data) => {
      setApplications(data);
      console.log(data);
      console.log(applications);
    });
  }, []);

  function addAplication(amount, price, side, instrument) {
    api
      .createApplication({ amount: amount, price: price, side: side, instrument: instrument })
      .then((res) => {
        console.log(1);
        setApplications([...applications, res]);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Ticker addAplication={addAplication} />
        <Table setApplications={setApplications} applications={applications} />
      </header>
    </div>
  );
}

export default App;
