/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Calendar.scss';
import { startOfDay, addMonths, eachDayOfInterval, getTime, addDays } from 'date-fns';
import CalendarCard from '../CalendarCard/CalendarCard';
import useLazyLoading from './useLazyLoading';

const INITIAL_SCALE = 0;
const INCREMENT = 1;

const createDates = (date) => {
  return eachDayOfInterval({
    start: date,
    end: addMonths(date, INCREMENT),
  });
};

function Calendar() {
  console.log('calendar');
  const [dates, setDates] = useState(() => createDates(startOfDay(new Date())));

  const appendItems = useCallback(() => {
    const lastDate = dates[dates.length - 1];
    setDates([...dates, ...createDates(addDays(lastDate, INCREMENT))]);
  }, [dates, setDates]);

  const [onScroll, containerRef] = useLazyLoading({
    onIntersection: appendItems,
    delay: 1200,
  });

  const handleWheel = useCallback((event) => {
    const target = document.querySelector('#calendar');
    const toLeft = event.deltaY < INITIAL_SCALE && target.scrollLeft > INITIAL_SCALE;
    const hiddenWidth = target.scrollWidth - target.clientWidth;
    const toRight = event.deltaY > INITIAL_SCALE && target.scrollLeft < hiddenWidth;

    if (toLeft || toRight) {
      event.preventDefault();
      target.scrollLeft += event.deltaY;
    }
  }, []);

  useEffect(() => {
    const target = document.querySelector('#calendar');
    target.addEventListener('wheel', handleWheel);

    return () => target.removeEventListener('wheel', handleWheel);
  }, []);

  const cards = useMemo(
    () => dates.map((item) => {
      return (
        <li key={item}>
          <CalendarCard date={getTime(item)} />
        </li>
      );
    }), [dates]);

  return (
    <ul className="calendar" id="calendar" ref={containerRef} onScroll={onScroll}>
      {cards}
    </ul>
  );
}

export default React.memo(Calendar);
