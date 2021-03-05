import './DatepickerTableButton.scss';
import PropTypes from 'prop-types';
import { startOfDay } from '../../../../core/date/date';

function DatepickerTableButton({ date, onClick, checkedDate }) {
  const toDay = startOfDay(new Date());
  let className = 'date-btn';

  if (+date === +checkedDate) {
    className += ' date-btn__checked';
  } else if (+toDay === +date) {
    className += ' date-btn__today';
  }

  return (
    <button className={className} type="button" onClick={() => onClick(date)}>
      {date.getDate()}
    </button>
  );
}

DatepickerTableButton.propTypes = {
  date: PropTypes.object,
  onClick: PropTypes.func,
  checkedDate: PropTypes.object,
};

export default DatepickerTableButton;
