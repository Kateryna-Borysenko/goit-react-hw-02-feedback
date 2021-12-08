import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total = 0, percentage }) => {
  return (
    <div className={styles.statistics}>
      <p className={styles.feedback}>
        Good: <span className={styles.feedbackValue}>{good}</span>
      </p>
      <p className={styles.feedback}>
        Neutral: <span className={styles.feedbackValue}>{neutral}</span>
      </p>
      <p className={styles.feedback}>
        Bad: <span className={styles.feedbackValue}>{bad}</span>
      </p>
      <p className={styles.total}>
        Total: <span className={styles.feedbackValue}>{total}</span>
      </p>
      <p className="positiveFeedback">
        Positive feedback:{'ok'}
        <span className={styles.feedbackValuePercentage}>{percentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  // percentage: PropTypes.number.isRequired,
};

export default Statistics;
