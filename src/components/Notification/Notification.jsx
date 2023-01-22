import style from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={style.message}> {message}</p>;
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
