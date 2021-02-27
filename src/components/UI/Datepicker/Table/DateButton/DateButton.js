import './DateButton.scss';
import PropTypes from 'prop-types';
import { startOfDay } from '../../../../../libraries/date';

function DateButton({ date, onClick, checkedDate }) {
  const toDay = startOfDay(new Date());

  let className = 'date-btn';

  if (date.getTime() === checkedDate.getTime()) {
    className += ' date-btn__checked';
  } else if (toDay.getTime() === date.getTime()) {
    className += ' date-btn__today';
  }

  return (
    <button className={className} type="button" onClick={() => onClick(date)}>
      {date.getDate()}
    </button>
  );
}

DateButton.propTypes = {
  date: PropTypes.object,
  onClick: PropTypes.func,
  checkedDate: PropTypes.object,
};

export default DateButton;
