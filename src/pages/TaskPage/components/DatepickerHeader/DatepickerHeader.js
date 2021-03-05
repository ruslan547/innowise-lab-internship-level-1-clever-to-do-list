import PropTypes from 'prop-types';
import './DatepickerHeader.scss';
import arrow from '../../../../assets/img/arrow.svg';
import { getNameMonth } from '../../../../core/date/date';

function DatepickerHeader({ date, setDate }) {
  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const previousMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  return (
    <div className="datepicker-header">
      <button type="button" className="datepicker-header__btn btn" onClick={previousMonth}>
        <img className="datepicker-header__arrow_right" src={arrow} alt="" />
      </button>
      <div className="datepicker-header__date">{`${getNameMonth(date)} ${date.getFullYear()}`}</div>
      <button type="button" className="datepicker-header__btn btn" onClick={nextMonth}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

DatepickerHeader.propTypes = {
  date: PropTypes.object,
  setDate: PropTypes.func,
};

export default DatepickerHeader;
