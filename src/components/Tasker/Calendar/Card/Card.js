import './Card.scss';
import PropTypes from 'prop-types';
import { useAuth } from '../../../../contexts/AuthContext';
import { getNameDay } from '../../../../libraries/date';

function Card({ date, currentDate, setCurrentDate, toDay }) {
  const { tasks } = useAuth();

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
      return item.date.getTime() === date.getTime() && item.checked;
    });
  };

  const createDayClass = () => {
    let dayClass = 'card__day';
    // console.log(toDay, date);
    if (toDay.getTime() === date.getTime()) {
      dayClass += ' card__day_today';
    }

    if (currentDate.getTime() === date.getTime()) {
      dayClass += ' card__day_current';
    }
    return dayClass;
  };

  return (
    <button type="button" className="card" onClick={handleClick}>
      <div className={createDayClass()} id={currentDate.getTime() === date.getTime() ? 'cur' : ''}>
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

Card.propTypes = {
  date: PropTypes.object,
  currentDate: PropTypes.object,
  setCurrentDate: PropTypes.func,
  toDay: PropTypes.object,
  setCalendar: PropTypes.func,
  calendar: PropTypes.object,
};

export default Card;
