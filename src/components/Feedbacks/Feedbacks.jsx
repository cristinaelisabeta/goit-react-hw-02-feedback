import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';
//----------------------------------------------------------//
export default function Feedbacks({ options, onLeaveFeedback}){
  return (
    <ul className={css.list}>
      {options.map(element => {
        return (
          <li key={element} className={css.item}>
            <button
              type="button"
              name={element}
              onClick={onLeaveFeedback}
              className={css.button}
            >
              {element}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Feedbacks.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};