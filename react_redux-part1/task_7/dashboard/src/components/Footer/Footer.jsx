import React from 'react';
import { useSelector } from 'react-redux';
import { getFullYear, getFooterCopy } from '../../utils/utils';
import './Footer.css';

function Footer() {
  // Redux store-dan isLoggedIn və user məlumatlarını götürürük
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <footer className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {/* isLoggedIn true olduqda "Contact us" linkini göstəririk */}
      {isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;