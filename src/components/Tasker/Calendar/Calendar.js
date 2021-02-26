import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Calendar.scss';
import Card from './Card/Card';
import { startOfDay } from '../../../libraries/date';

function Calendar({ currentDate, setCurrentDate, toDay }) {
  let date = startOfDay(new Date());
  const stopDay = date.getDate();
  const cards = [];

  do {
    cards.push(
      <Card
        key={date}
        date={date}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        toDay={toDay}
      />,
    );
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

  return <ul className="calendar">{cards}</ul>;
}

Calendar.propTypes = {
  tasks: PropTypes.array,
  currentDate: PropTypes.object,
  setCurrentDate: PropTypes.func,
  toDay: PropTypes.object,
};

export default Calendar;
