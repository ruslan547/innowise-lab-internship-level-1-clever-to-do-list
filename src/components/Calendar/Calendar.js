import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Calendar.scss';
import CalendarCard from '../CalendarCard/CalendarCard';
import { startOfDay } from '../../shared/date/date';
import enableScroll from './enableScroll';
import { addDates, createDates } from './endlessScrolling';

function Calendar({ currentDate, setCurrentDate, tasks }) {
  const initDate = startOfDay(new Date());
  const [dates, setDates] = useState(createDates(initDate));

  const handleClick = useCallback((date) => {
    setCurrentDate(date);
  }, []);

  const checkFulfilledTasks = useCallback(
    (date) => {
      return tasks.some((item) => +item.date === +date && item.checked);
    },
    [tasks],
  );

  const checkPendingTasks = useCallback(
    (date) => {
      return tasks.some((item) => +item.date === +date && !item.checked);
    },
    [tasks],
  );

  const createDayClass = useCallback(
    (date) => {
      const toDay = startOfDay(new Date());
      let dayClass = 'card__day';

      if (+toDay === +date) {
        dayClass += ' card__day_today';
      }

      if (+currentDate === +date) {
        dayClass += ' card__day_current';
      }
      return dayClass;
    },
    [currentDate],
  );

  const cards = dates.map((item) => {
    return (
      <CalendarCard
        key={item}
        date={item}
        currentDate={currentDate}
        onClick={handleClick}
        checkPendingTasks={checkPendingTasks}
        checkFulfilledTasks={checkFulfilledTasks}
        createDayClass={createDayClass}
      />
    );
  });

  const handleWheel = (event) => {
    const target = document.querySelector('.calendar');
    enableScroll(event, target);
    addDates(dates, setDates);
  };

  useEffect(() => {
    const target = document.querySelector('.calendar');
    target.addEventListener('wheel', handleWheel);
  });

  return <ul className="calendar">{cards}</ul>;
}

Calendar.propTypes = {
  tasks: PropTypes.array,
  currentDate: PropTypes.object,
  setCurrentDate: PropTypes.func,
};

export default Calendar;
