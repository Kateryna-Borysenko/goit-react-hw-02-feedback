import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {/* title - по умолчанию */}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string, //может прийти, а может и нет;
};
export default Section;
