import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div className={styles.statistics}>
      <p className={styles.goodFeedback}>
        Good: <span className={styles.feedbackValue}>{good}</span>
      </p>
      <p className="goodFeedback">
        Neutral: <span className={styles.feedbackValue}>{neutral}</span>
      </p>
      <p className="goodFeedback">
        Bad: <span className={styles.feedbackValue}>{bad}</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
