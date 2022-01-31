import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ categories, onClickBtn }) => (
  <div className={styles.wrap}>
    {categories.map(category => (
      <button
        key={category}
        className={styles.btn}
        type="button"
        onClick={() => onClickBtn(category)}
      >
        {category}
      </button>
    ))}
  </div>
);
FeedbackOptions.propType = {
  categories: PropTypes.array.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
export default FeedbackOptions;
