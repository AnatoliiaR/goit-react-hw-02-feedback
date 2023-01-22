import style from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div className={style.section}>
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </div>
  );
}

export default Section;

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
