import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Calendar.scss';
import Card from './Card/Card';

const roundDate = (date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

function Calendar() {
  let date = roundDate(new Date());
  const stopDay = date.getDate();
  const cards = [];

  do {
    cards.push(<Card key={date.toString()} date={date} />);
    date = new Date(date);
    date.setDate(date.getDate() + 1);
  } while (date.getDate() !== stopDay);

  const handleWheel = (event) => {
    const target = document.querySelector('.calendar');
    const toLeft = event.deltaY < 0 && target.scrollLeft > 0;
    const hiddenWidth = target.scrollWidth - target.clientWidth;
    const toRight = event.deltaY > 0 && target.scrollLeft < hiddenWidth;

    if (toLeft || toRight) {
      event.preventDefault();
      target.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const calendar = document.querySelector('.calendar');

    calendar.addEventListener('wheel', handleWheel);
  });

  return <section className="calendar">{cards}</section>;
}

Calendar.propTypes = {
  tasks: PropTypes.array,
};

export default Calendar;
