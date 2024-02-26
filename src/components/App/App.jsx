import React from 'react';
import './App.css';
import Ticker from '../Ticker/Ticker';
import Table from '../Table/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ticker />
        <Table />
      </header>
    </div>
  );
}

export default App;
