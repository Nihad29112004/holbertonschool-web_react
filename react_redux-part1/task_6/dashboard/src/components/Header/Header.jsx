import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import logo from '../../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  // Redux store-dan auth slice-ını əldə edirik
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Logout funksiyasını dispatch edirik
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </div>

      {isLoggedIn && (
        <section id="logoutSection" className={css(styles.logoutSection)}>
          Welcome <b>{user.email}</b> 
          <a href="#" onClick={handleLogout} className={css(styles.logoutLink)}>
            (logout)
          </a>
        </section>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
    width: '100%'
  },
  logo: {
    width: '200px',
    height: '200px'
  },
  title: {
    margin: '0',
    fontSize: '2.5rem'
  },
  logoutSection: {
    marginTop: '20px',
    marginLeft: '20px',
  },
  logoutLink: {
    fontStyle: 'italic',
    marginLeft: '10px',
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer'
  }
});

export default Header;