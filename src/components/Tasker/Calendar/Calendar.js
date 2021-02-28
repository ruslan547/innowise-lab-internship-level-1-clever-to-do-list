import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Calendar.scss';
import Card from './Card/Card';
import { startOfDay } from '../../../date/date';

const INITIAL_SCALE = 0;
const INCREMENT = 1;

function createDates(date) {
  const stopDay = date.getDate();
  const result = [];
  do {
    result.push(new Date(date));
    date.setDate(date.getDate() + INCREMENT);
  } while (date.getDate() !== stopDay);

  return result;
}

function Calendar({ currentDate, setCurrentDate }) {
  const initDate = startOfDay(new Date());
  const [dates, setDates] = useState(createDates(initDate));

  const cards = dates.map((item) => {
    return (
      <Card key={item} date={item} currentDate={currentDate} setCurrentDate={setCurrentDate} />
    );
  });

  const addDates = () => {
    const target = document.querySelector('.calendar');
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    if (target.scrollLeft === maxScrollLeft) {
      const lastDate = dates[dates.length - 1];
      const lastDageCopy = new Date(lastDate);
      lastDageCopy.setDate(lastDageCopy.getDate() + INCREMENT);
      const newDates = createDates(lastDageCopy);
      setDates([...dates, ...newDates]);
    }
  };

  const enableScroll = (event) => {
    const target = document.querySelector('.calendar');
    const toLeft = event.deltaY < INITIAL_SCALE && target.scrollLeft > INITIAL_SCALE;
    const hiddenWidth = target.scrollWidth - target.clientWidth;
    const toRight = event.deltaY > INITIAL_SCALE && target.scrollLeft < hiddenWidth;

    if (toLeft || toRight) {
      event.preventDefault();
      target.scrollLeft += event.deltaY;
    }
  };

  const handleWheel = (event) => {
    enableScroll(event);
    addDates();
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
