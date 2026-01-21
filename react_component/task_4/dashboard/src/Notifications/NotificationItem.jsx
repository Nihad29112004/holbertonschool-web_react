import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render() {
    // Propları parçalayırıq
    const { type, html, value, markAsRead, id } = this.props;

    // Əgər HTML kontenti varsa (dangerouslySetInnerHTML), onu render edirik
    if (html) {
      return (
        <li 
          data-notification-type={type} 
          dangerouslySetInnerHTML={html} 
          onClick={() => markAsRead(id)}
        ></li>
      );
    }

    // Əgər sadə mətn (value) varsa, onu render edirik
    return (
      <li 
        data-notification-type={type} 
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

// Propların validasiyası Holberton testləri üçün çox vacibdir
NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func
};

// Default dəyərlər
NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}, // Boş funksiya ki, xəta verməsin
  id: 0
};

export default NotificationItem;