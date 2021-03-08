/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Calendar.scss';
import { startOfDay, addMonths, eachDayOfInterval, addDays } from 'date-fns';
import CalendarCard from '../CalendarCard/CalendarCard';
import useLazyLoading from './useLazyLoading';

const INITIAL_SCALE = 0;
const INCREMENT = 1;
const TIMEOUT_DELAY = 1200;

const createDates = (date) => {
  return eachDayOfInterval({
    start: date,
    end: addMonths(date, INCREMENT),
  });
};

function Calendar() {
  const [dates, setDates] = useState(() => createDates(startOfDay(new Date())));

  const appendItems = useCallback(() => {
    const lastDate = dates[dates.length - 1];
    setDates([...dates, ...createDates(addDays(lastDate, INCREMENT))]);
  }, [dates, setDates]);

  const [onScroll, containerRef] = useLazyLoading({
    onIntersection: appendItems,
    delay: TIMEOUT_DELAY,
  });

  const handleWheel = useCallback((event) => {
    const { current } = containerRef;
    const toLeft = event.deltaY < INITIAL_SCALE && current.scrollLeft > INITIAL_SCALE;
    const hiddenWidth = current.scrollWidth - current.clientWidth;
    const toRight = event.deltaY > INITIAL_SCALE && current.scrollLeft < hiddenWidth;

    if (toLeft || toRight) {
      event.preventDefault();
      current.scrollLeft += event.deltaY;
    }
  }, [containerRef]);

  useEffect(() => {
    const { current } = containerRef;
    current.addEventListener('wheel', handleWheel);

    return () => current.removeEventListener('wheel', handleWheel);
  }, [containerRef, handleWheel]);

  const cards = useMemo(
    () => dates.map((item) => {
      return (
        <li key={item}>
          <CalendarCard date={item} />
        </li>
      );
    }), [dates]);

  return (
    <ul className="calendar" ref={containerRef} onScroll={onScroll}>
      {cards}
    </ul>
  );
}

export default React.memo(Calendar);
