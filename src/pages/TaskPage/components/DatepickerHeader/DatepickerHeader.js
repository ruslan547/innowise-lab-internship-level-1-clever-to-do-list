import PropTypes from 'prop-types';
import './DatepickerHeader.scss';
import { format, addMonths, getTime } from 'date-fns';
import React from 'react';
import arrow from '../../../../assets/img/arrow.svg';

function DatepickerHeader({ date, setDate }) {
  const nextMonth = () => {
    setDate(getTime(addMonths(date, 1)));
  };

  const previousMonth = () => {
    setDate(getTime(addMonths(date, -1)));
  };

  return (
    <div className="datepicker-header">
      <button type="button" className="datepicker-header__btn btn" onClick={previousMonth}>
        <img className="datepicker-header__arrow_right" src={arrow} alt="" />
      </button>
      <div className="datepicker-header__date">{format(date, 'MMMM yyyy')}</div>
      <button type="button" className="datepicker-header__btn btn" onClick={nextMonth}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

DatepickerHeader.propTypes = {
  date: PropTypes.number,
  setDate: PropTypes.func,
};

export default React.memo(DatepickerHeader);
