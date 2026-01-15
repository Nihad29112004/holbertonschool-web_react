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
        <div className="App-header">
          <img src={logo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          
          {/* Email bloku - Aradakı boşluqlara və htmlFor/id uyğunluğuna diqqət */}
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
          
          {/* Password bloku - Aradakı boşluqlara və htmlFor/id uyğunluğuna diqqət */}
          <label htmlFor="password"> Password: </label>
          <input type="password" id="password" />
          
          <button type="button">OK</button>
        </div>
        <div className="App-footer">
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
      </div>
    </>
  );
}

export default App;