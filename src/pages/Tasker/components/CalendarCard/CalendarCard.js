import './CalendarCard.scss';
import PropTypes from 'prop-types';
import { format, getDate } from 'date-fns';
import isEqual from 'date-fns/isEqual';
import React, { useCallback, useMemo } from 'react';
import isToday from 'date-fns/isToday';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';

const checkCompletedTasks = (tasks, date) => {
  return Object.values(tasks).some((item) => isEqual(item.date, date) && item.checked);
};

const checkPendingTasks = (tasks, date) => {
  return Object.values(tasks).some((item) => isEqual(item.date, date) && !item.checked);
};

const createDayClass = (date, currentDate) => {
  let dayClass = 'card__day';

  if (isToday(date)) {
    dayClass += ' card__day_today';
  }

  if (isEqual(currentDate, date)) {
    dayClass += ' card__day_current';
  }
  return dayClass;
};

const CalendarCard = ({ date }) => {
  const { tasks, currentDate, setCurrentDate } = useApp();
  console.log('calendar card');

  const dayClass = useMemo(() => createDayClass(date, currentDate), [date, currentDate]);
  const isCompletedTask = useMemo(() => checkCompletedTasks(tasks, date), [tasks, date]);
  const isPendingTask = useMemo(() => checkPendingTasks(tasks, date), [tasks, date]);
  const dateWord = useMemo(() => format(date, 'eee'), [date]);
  const dateNumber = useMemo(() => getDate(date), [date]);

  const handleClick = useCallback(() => setCurrentDate(date), [date, setCurrentDate]);

  return (
    <button type="button" className="card btn" onClick={handleClick}>
      <div className={dayClass}>
        <span className="card__text">{dateWord}</span>
        <span className="card__number">{dateNumber}</span>
      </div>
      <div className="card__board">
        {isPendingTask ? <div className="card__pending" /> : null}
        {isCompletedTask ? <div className="card__fulfilled" /> : null}
      </div>
    </button>
  );
};

CalendarCard.propTypes = {
  date: PropTypes.object,
};

export default CalendarCard;
