import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import Notifications from './components/Notifications/Notifications';
import BodySectionWithMarginBottom from './components/BodySection/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';
import { StyleSheet, css } from 'aphrodite';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // Komponent mount olanda bildirişləri çək
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    // Yalnız giriş edildikdə kursları çək
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <Notifications />
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.body)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some random news text here...</p>
          </BodySection>
        </div>
        <Footer />
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  app: { position: 'relative', minHeight: '100vh' },
  body: { padding: '50px' }
});

export default App;