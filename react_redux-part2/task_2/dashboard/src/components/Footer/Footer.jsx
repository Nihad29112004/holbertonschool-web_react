import React from 'react';
import { getFullYear, getFooterCopy } from '../../src/utils/utils';

function Footer() {
  return (
    <div className="footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}
export default Footer;