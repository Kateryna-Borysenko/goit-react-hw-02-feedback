import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      {/* title - по умолчанию */}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string, //может прийти, а может и нет;
};
export default Section;
