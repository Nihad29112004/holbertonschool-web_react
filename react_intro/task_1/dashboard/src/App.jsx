import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils'; // Funksiyaları import edirik
import Notifications from './Notifications'; // Komponenti import edirik

function App() {
  return (
    <>
      {/* Notifications komponentini root-notifications div-inə bükürük */}
      <div className="root-notifications">
        <Notifications />
      </div>
      
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
        <div className="App-footer">
          {/* Funksiyalardan istifadə edirik */}
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
      </div>
    </>
  );
}

export default App;