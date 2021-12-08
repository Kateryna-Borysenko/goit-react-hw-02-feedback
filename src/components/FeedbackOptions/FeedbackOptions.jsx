import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ categories, onClickBtn }) => (
  <div className={styles.wrap}>
    {categories.map(category => (
      <button
        key={category} //без уникал ключа даёт ошибку
        className={styles.btn}
        type="button"
        onClick={() => onClickBtn(category)} //aнанимная ф-ция которая сработает при клике
      >
        {category}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
