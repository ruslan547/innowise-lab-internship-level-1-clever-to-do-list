import './DatepickerTable.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import DatepickerTableButton from '../DatepickerTableButton/DatepickerTableButton';

const WEEK_DAYS = 7;
const SUN = 0;
const SAT = 6;
const MONTH_FIRST_NUMBER = 1;

function DatepickerTable({ date, onChange }) {
  const calendarDate = new Date(date);
  const [checkedDate, setCheckedDate] = useState(new Date(date));
  const lastDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
  const lastDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), lastDate).getDay();
  const firstDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1).getDay();
  const calendar = [];
  let week = [];

  const handleClick = (btnDate) => {
    setCheckedDate(new Date(btnDate));
    onChange({ target: { name: 'date', value: btnDate } });
  };

  const generateNumber = () => {
    return Math.random();
  };

  const fillStartMonthByEmpty = () => {
    if (firstDay !== SUN) {
      for (let i = 0; i < firstDay; i++) week.push(<td key={generateNumber()} />);
    } else {
      for (let i = 0; i < SUN; i++) week.push(<td key={generateNumber()} />);
    }
  };

  const fillMonthByDate = () => {
    for (let i = MONTH_FIRST_NUMBER; i <= lastDate; i++) {
      const tmpDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), i);

      week.push(
        <td key={generateNumber()}>
          <DatepickerTableButton date={tmpDate} checkedDate={checkedDate} onClick={handleClick} />
        </td>,
      );

      if (tmpDate.getDay() === SAT) {
        calendar.push(<tr key={generateNumber()}>{week.slice()}</tr>);
        week = [];
      }
    }
  };

  const fillEndMonthByEmpty = () => {
    if (lastDay !== SUN) {
      for (let i = lastDay; i < WEEK_DAYS; i++) week.push(<td key={generateNumber()} />);
    }
  };

  fillStartMonthByEmpty();
  fillMonthByDate();
  fillEndMonthByEmpty();
  calendar.push(<tr key={generateNumber()}>{week}</tr>);

  return <tbody>{calendar}</tbody>;
}

DatepickerTable.propTypes = {
  date: PropTypes.object,
  onChange: PropTypes.func,
};

export default DatepickerTable;
