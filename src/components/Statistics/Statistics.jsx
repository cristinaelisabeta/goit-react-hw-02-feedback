import PropTypes from 'prop-types';
import css from './Statistics.module.css';
//----------------------------------------------------------//
export default function Statistics({ good, neutral, bad, total, positivePercentage = 0 }) {
  return (
    <ul className={css.list}>
      <li key="1" className={css.item}>
        <p className={css.good}>Good: {good}</p>
      </li>
      <li key="2" className={css.item}>
        <p className={css.neutral}>Neutral: {neutral}</p>
      </li>
      <li key="3" className={css.item}>
        <p className={css.bad}>Bad: {bad}</p>
      </li>
      <li key="4" className={css.item}>
        <p className={css.total}>Total: {total}</p>
      </li>
      <li key="5">
        <p className={css.persentage}>
          Positive feedback: {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};