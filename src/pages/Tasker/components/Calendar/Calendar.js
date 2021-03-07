/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo } from 'react';
import './Calendar.scss';
import {
  startOfDay,
  addMonths,
  eachDayOfInterval,
  // addDays,
  getTime,
} from 'date-fns';
import CalendarCard from '../CalendarCard/CalendarCard';
import enableScroll from './enableScroll';

const INCREMENT = 1;

const createDates = (date) => {
  console.log('init date');
  return eachDayOfInterval({
    start: date,
    end: addMonths(date, INCREMENT),
  });
};

function Calendar() {
  // const [dates] = useState(() => createDates(startOfDay(new Date())));
  const dates = useMemo(() => createDates(startOfDay(new Date())), []);
  console.log('calendar');

  const createCards = () => {
    console.log('createCards');
    return dates.map((item) => {
      return (
        <CalendarCard
          key={item}
          date={getTime(item)}
        />
      );
    });
  };

  // const addDates = (data) => {
  //   return new Promise((resolve) => {
  //     const target = document.querySelector('.calendar');
  //     const maxScrollLeft = target.scrollWidth - target.clientWidth;
  //     if (target.scrollLeft === maxScrollLeft) {
  //       const lastDate = data[data.length - 1];
  //       const newDates = createDates(addDays(new Date(lastDate), INCREMENT));
  //       resolve(newDates);
  //     }
  //   });
  // };

  const handleWheel = (event) => {
    const target = document.querySelector('.calendar');
    enableScroll(event, target);
    // addDates(dates).then((response) => setDates([...dates, ...response]));
  };

  useEffect(() => {
    const target = document.querySelector('.calendar');
    target.addEventListener('wheel', handleWheel);
  }, []);

  const cards = useMemo(() => createCards(), []);

  return <ul className="calendar">{cards}</ul>;
}

export default React.memo(Calendar);
