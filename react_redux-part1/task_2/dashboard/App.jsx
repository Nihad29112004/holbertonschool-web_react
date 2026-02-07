import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import Notifications from './components/Notifications/Notifications';

function App() {
  // Redux-dan login olub-olmadığını yoxlayırıq
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

export default App;