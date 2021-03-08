import './DatepickerTableButton.scss';
import PropTypes from 'prop-types';
import { isToday, isEqual, getDate } from 'date-fns';
import React from 'react';

function DatepickerTableButton({ date, onClick, checkedDate }) {
  const createClassName = () => {
    let className = 'date-btn';

    if (isEqual(date, checkedDate)) {
      className += ' date-btn__checked';
    } else if (isToday(date)) {
      className += ' date-btn__today';
    }

    return className;
  };

  return (
    <button className={createClassName()} type="button" onClick={() => onClick(date)}>
      {getDate(date)}
    </button>
  );
}

DatepickerTableButton.propTypes = {
  date: PropTypes.number,
  onClick: PropTypes.func,
  checkedDate: PropTypes.number,
};

export default React.memo(DatepickerTableButton);
