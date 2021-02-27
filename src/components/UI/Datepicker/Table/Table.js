import './Table.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import DateButton from './DateButton/DateButton';

const WEEK_DAYS = 7;
const SUN = 0;
const SAT = 6;
const MONTH_FIRST_NUMBER = 1;

function Table({ date, onChange }) {
  const calendarDate = new Date(date);
  const [checkedDate, setCheckedDate] = useState(date);
  const D1last = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
  const D1Nlast = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), D1last).getDay();
  const D1Nfirst = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1).getDay();
  const calendar = [];
  let week = [];

  const handleClick = (btnDate) => {
    setCheckedDate(new Date(btnDate));
    onChange({ target: { name: 'date', value: btnDate } });
  };

  const generateNumber = () => {
    return Math.random();
  };

  if (D1Nfirst !== SUN) {
    for (let i = 0; i < D1Nfirst; i++) week.push(<td key={generateNumber()} />);
  } else {
    for (let i = 0; i < SUN; i++) week.push(<td key={generateNumber()} />);
  }

  for (let i = MONTH_FIRST_NUMBER; i <= D1last; i++) {
    const tmpDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), i);

    week.push(
      <td key={generateNumber()}>
        <DateButton date={tmpDate} checkedDate={checkedDate} onClick={handleClick} />
      </td>,
    );

    if (tmpDate.getDay() === SAT) {
      calendar.push(<tr key={generateNumber()}>{week.slice()}</tr>);
      week = [];
    }
  }

  if (D1Nlast !== SUN) {
    for (let i = D1Nlast; i < WEEK_DAYS; i++) week.push(<td key={generateNumber()} />);
  }

  calendar.push(<tr key={generateNumber()}>{week}</tr>);
  return <tbody>{calendar}</tbody>;
}

Table.propTypes = {
  date: PropTypes.object,
  onChange: PropTypes.func,
};

export default Table;
