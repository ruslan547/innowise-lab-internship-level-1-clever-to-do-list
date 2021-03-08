import './DatepickerTableButton.scss';
import PropTypes from 'prop-types';
import { isToday, isEqual, getDate } from 'date-fns';
import { useMemo } from 'react';

const createClass = (date, checkedDate) => {
  let className = 'date-btn';

  if (isEqual(date, checkedDate)) {
    className += ' date-btn__checked';
  } else if (isToday(date)) {
    className += ' date-btn__today';
  }

  return className;
};

function DatepickerTableButton({ date, onClick, checkedDate }) {
  console.log('DatepickerTableButton');
  const className = useMemo(() => createClass(date, checkedDate), [date, checkedDate]);

  return (
    <button className={className} type="button" onClick={() => onClick(date)}>
      {getDate(date)}
    </button>
  );
}

DatepickerTableButton.propTypes = {
  date: PropTypes.number,
  onClick: PropTypes.func,
  checkedDate: PropTypes.number,
};

export default DatepickerTableButton;
