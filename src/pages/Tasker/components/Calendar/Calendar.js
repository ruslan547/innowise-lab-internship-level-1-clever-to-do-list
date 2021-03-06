/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useMemo, useState } from 'react';
import './Calendar.scss';
import { startOfDay, isToday, isEqual, addMonths, eachDayOfInterval, addDays } from 'date-fns';
import CalendarCard from '../CalendarCard/CalendarCard';
import enableScroll from './enableScroll';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';

const INCREMENT = 1;

const createDates = (date) => {
  return eachDayOfInterval({
    start: date,
    end: addMonths(date, INCREMENT),
  });
};

function Calendar() {
  const { tasks, currentDate, setCurrentDate } = useApp();
  const initDate = startOfDay(new Date());
  const [dates, setDates] = useState(useMemo(() => createDates(initDate)), []);
  console.log('calendar');

  const handleClick = useCallback((date) => {
    setCurrentDate(new Date(date));
  }, []);

  const checkFulfilledTasks = useCallback(
    (date) => {
      return Object.values(tasks).some((item) => isEqual(item.date, date) && item.checked);
    },
    [tasks],
  );

  const checkPendingTasks = useCallback(
    (date) => {
      return Object.values(tasks).some((item) => isEqual(item.date, date) && !item.checked);
    },
    [tasks],
  );

  const createDayClass = useCallback(
    (date) => {
      let dayClass = 'card__day';

      if (isToday(date)) {
        dayClass += ' card__day_today';
      }

      if (isEqual(currentDate, date)) {
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
        onClick={handleClick}
        checkPendingTasks={checkPendingTasks}
        checkFulfilledTasks={checkFulfilledTasks}
        createDayClass={createDayClass}
      />
    );
  });

  const addDates = (data) => {
    return new Promise((resolve) => {
      const target = document.querySelector('.calendar');
      const maxScrollLeft = target.scrollWidth - target.clientWidth;
      if (target.scrollLeft === maxScrollLeft) {
        const lastDate = data[data.length - 1];
        const newDates = createDates(addDays(new Date(lastDate), INCREMENT));
        resolve(newDates);
      }
    });
  };

  const handleWheel = (event) => {
    const target = document.querySelector('.calendar');
    enableScroll(event, target);
    addDates(dates).then((response) => setDates([...dates, ...response]));
  };

  useEffect(() => {
    const target = document.querySelector('.calendar');
    target.addEventListener('wheel', handleWheel);
  });

  return <ul className="calendar">{cards}</ul>;
}

export default Calendar;
