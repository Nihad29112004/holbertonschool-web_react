import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import logo from '../../assets/holberton-logo.jpg';

function Header() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
      {isLoggedIn && (
        <section id="logoutSection">
          Welcome <b>{user?.email}</b> 
          <a href="#" onClick={() => dispatch(logout())} style={{ marginLeft: '10px' }}>(logout)</a>
        </section>
      )}
    </header>
  );
}
export default Header;