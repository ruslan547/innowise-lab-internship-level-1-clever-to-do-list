import './CalendarCard.scss';
import PropTypes from 'prop-types';
import { getNameDay, startOfDay } from '../../shared/date/date';

function CalendarCard({ date, currentDate, setCurrentDate, tasks }) {
  const toDay = startOfDay(new Date());

  const handleClick = () => {
    setCurrentDate(date);
  };

  const checkPendingTasks = () => {
    return tasks.some((item) => {
      return item.date.getTime() === date.getTime() && !item.checked;
    });
  };

  const checkFulfilledTasks = () => {
    return tasks.some((item) => {
      return +item.date === +date && item.checked;
    });
  };

  const createDayClass = () => {
    let dayClass = 'card__day';
    if (+toDay === +date) {
      dayClass += ' card__day_today';
    }

    if (+currentDate === +date) {
      dayClass += ' card__day_current';
    }
    return dayClass;
  };

  return (
    <button type="button" className="card btn" onClick={handleClick}>
      <div className={createDayClass()}>
        <span className="card__text">{getNameDay(date)}</span>
        <span className="card__number">{date.getDate()}</span>
      </div>
      <div className="card__board">
        {checkPendingTasks() ? <div className="card__pending" /> : null}
        {checkFulfilledTasks() ? <div className="card__fulfilled" /> : null}
      </div>
    </button>
  );
}

CalendarCard.propTypes = {
  date: PropTypes.object,
  currentDate: PropTypes.object,
  setCurrentDate: PropTypes.func,
  tasks: PropTypes.array,
};

export default CalendarCard;
