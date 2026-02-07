import React from 'react';

function Login() {
  return (
    <div className="login-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button>OK</button>
    </div>
  );
}
export default Login;