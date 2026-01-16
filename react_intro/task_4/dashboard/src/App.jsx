import React from 'react';
// Şəkli və funksiya adlarını düzgün import edirik
import holberton_logo from './holberton_logo.jpg';
import { getFooterCopy, getCurrentYear } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <figure>
          {/* holberton_logo yuxarıda import edildiyi üçün burada işləyəcək */}
          <img src={holberton_logo} alt="Holberton Logo" width="200px" />
        </figure>
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form>
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" type="text" />

          <label htmlFor="password"> Password: </label>
          <input id="password" name="password" type="password" />

          <button type="button">OK</button>
        </form>
      </div>

      <div className="App-footer">
        {/* getFullYear yerinə getCurrentYear istifadə edirik */}
        <p>Copyright { getCurrentYear() } - { getFooterCopy(true) }</p>
      </div>
    </>
  );
}

export default App;