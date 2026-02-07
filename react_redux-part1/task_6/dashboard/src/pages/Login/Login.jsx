import React from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../../features/auth/authSlice';
import useLogin from './useLogin'; // Form state management və validation üçün
import { StyleSheet, css } from 'aphrodite';

function Login() {
  const dispatch = useDispatch();

  // Redux action-ını dispatch edən funksiya
  const handleLoginDispatch = (email, password) => {
    dispatch(loginAction({ email, password }));
  };

  // useLogin hook-una onLogin olaraq Redux dispatch funksiyasını ötürürük
  const {
    email,
    password,
    emailError,
    passwordError,
    isSubmitDisabled,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useLogin(handleLoginDispatch);

  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleSubmit}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
            className={css(emailError && styles.inputError)}
          />
          {emailError && <span className={css(styles.errorText)}>{emailError}</span>}
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            className={css(passwordError && styles.inputError)}
          />
          {passwordError && <span className={css(styles.errorText)}>{passwordError}</span>}
        </div>
        <button 
          type="submit" 
          disabled={isSubmitDisabled}
          className={css(styles.button)}
        >
          OK
        </button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    margin: '50px',
    textAlign: 'left',
  },
  inputGroup: {
    display: 'inline-block',
    marginRight: '10px',
    '@media (max-width: 900px)': {
      display: 'block',
      marginBottom: '10px',
    },
  },
  inputError: {
    border: '1px solid red',
  },
  errorText: {
    color: 'red',
    fontSize: '0.8rem',
    display: 'block',
  },
  button: {
    cursor: 'pointer',
    border: '1px solid orange',
    background: 'transparent',
  },
});

export default Login;