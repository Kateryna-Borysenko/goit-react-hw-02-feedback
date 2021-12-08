import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
Notification.propType = {
  message: PropTypes.string.isRequired,
};
export default Notification;
