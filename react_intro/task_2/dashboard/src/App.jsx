import logo from './holberton-logo.jpg';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </header>
        <main className="App-body">
          <p>Login to access the full dashboard</p>
          
          {/* Email sahəsi */}
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
          
          {/* Parol sahəsi */}
          <label htmlFor="password"> Password: </label>
          <input type="password" id="password" name="password" />
          
          {/* Düymə */}
          <button type="button">OK</button>
        </main>
        <footer className="App-footer">
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    </>
  );
}

export default App;