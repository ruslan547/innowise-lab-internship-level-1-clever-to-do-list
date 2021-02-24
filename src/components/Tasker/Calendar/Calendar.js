import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Calendar.scss';
import Card from './Card/Card';

function Calendar({ tasks }) {
  const cards = tasks.map((item, i) => <Card key={i.toString()} date={item.date} />);

  useEffect(() => {
    const target = document.querySelector('.calendar');

    target.addEventListener('wheel', (event) => {
      const toLeft = event.deltaY < 0 && target.scrollLeft > 0;
      const hiddenWidth = target.scrollWidth - target.clientWidth;
      const toRight = event.deltaY > 0 && target.scrollLeft < hiddenWidth;

      if (toLeft || toRight) {
        event.preventDefault();
        target.scrollLeft += event.deltaY;
      }
    });
  });

  return <section className="calendar">{cards}</section>;
}

Calendar.propTypes = {
  tasks: PropTypes.array,
};

export default Calendar;
