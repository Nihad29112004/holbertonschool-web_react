import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// Digər komponentləri import edirik
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

class App extends Component {
  // Class komponentlərdə render metodu mütləqdir
  render() {
    const { isLoggedIn } = this.props;

    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            {/* Şərtə əsasən Login və ya digər kontent */}
            {isLoggedIn ? <p>Kurs siyahısı bura gələcək</p> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// Propların validasiyası (Holberton tələbidir)
App.propTypes = {
  isLoggedIn: PropTypes.bool
};

// İlkin dəyər
App.defaultProps = {
  isLoggedIn: false
};

export default App;