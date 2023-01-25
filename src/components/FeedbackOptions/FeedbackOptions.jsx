import style from './FeedbackOptions.module.css';
import getColorBtn from './getColorBtn';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            className={style.button}
            type="button"
            // onClick={e => {
            //   let data = e.target.name;
            //   return onLeaveFeedback(data);
            // }}
            onClick={() => onLeaveFeedback(option)}
            name={option}
            style={{ backgroundColor: getColorBtn(option) }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  getColorBtn: PropTypes.func.isRequired,
};

export default FeedbackOptions;
