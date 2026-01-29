import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// React.Component əvəzinə PureComponent-dən miras alırıq
class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;

    if (html) {
      return (
        <li 
          data-notification-type={type} 
          dangerouslySetInnerHTML={html} 
          onClick={() => markAsRead(id)}
        ></li>
      );
    }

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

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0
};

export default NotificationItem;