import holberton_logo from './holberton_logo.jpg'
import './App.css'
import { getFooterCopy, getFullYear } from './utils'

function App() {
  return (
    <>
      <div className="App-header">
        <figure>
          <img src={holberton_logo} alt="Holberton Logo" />
        </figure>
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form>
          <label htmlFor="email">Email: </label>
          <input id="email" name="email" type="text" />

          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />

          <button>OK</button>
        </form>
      </div>

      <div className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </div>
    </>
  )
}

export default App