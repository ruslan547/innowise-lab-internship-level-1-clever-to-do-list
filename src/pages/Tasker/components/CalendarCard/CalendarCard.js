import './CalendarCard.scss';
import PropTypes from 'prop-types';
import { getNameDay } from '../../../../core/date/date';

function CalendarCard({ date, onClick, checkPendingTasks, checkFulfilledTasks, createDayClass }) {
  return (
    <button type="button" className="card btn" onClick={() => onClick(date)}>
      <div className={createDayClass(date)}>
        <span className="card__text">{getNameDay(date)}</span>
        <span className="card__number">{date.getDate()}</span>
      </div>
      <div className="card__board">
        {checkPendingTasks(date) ? <div className="card__pending" /> : null}
        {checkFulfilledTasks(date) ? <div className="card__fulfilled" /> : null}
      </div>
    </button>
  );
}

CalendarCard.propTypes = {
  date: PropTypes.object,
  onClick: PropTypes.func,
  checkPendingTasks: PropTypes.func,
  checkFulfilledTasks: PropTypes.func,
  createDayClass: PropTypes.func,
};

export default CalendarCard;
