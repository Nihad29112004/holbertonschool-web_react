import React from 'react';
import closeIcon from '../../assets/close-icon.png';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{ float: 'right' }} aria-label="Close">
        <img src={closeIcon} alt="close" width="10px" />
      </button>
    </div>
  );
}
export default Notifications;