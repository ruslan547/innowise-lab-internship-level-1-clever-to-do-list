import './DatepickerTable.scss';
import PropTypes from 'prop-types';
import { startOfMonth, isSunday, getWeeksInMonth, addDays, getMonth, getTime } from 'date-fns';
import React, { useCallback, useMemo, useState } from 'react';
import DatepickerTableButton from '../DatepickerTableButton/DatepickerTableButton';

const WEEK_DAYS = 7;
const INCREMENT = 1;

const generateNumber = () => {
  return Math.random();
};

const generateCalendar = (date, checkedDate, handleClick) => {
  let calendarDate = startOfMonth(date);
  const firstDay = startOfMonth(calendarDate).getDay();
  const weekCount = getWeeksInMonth(date);
  const calendar = new Array(weekCount).fill(null);

  return calendar.map((week, calendarI) => {
    week = new Array(WEEK_DAYS).fill(null);
    week.forEach((_, weekI) => {
      if (
        // eslint-disable-next-line operator-linebreak
        (!calendarI && !isSunday(firstDay) && weekI >= firstDay) ||
        (calendarI && getMonth(calendarDate) === getMonth(date))
      ) {
        week[weekI] = (
          <td key={generateNumber()}>
            <DatepickerTableButton
              date={getTime(calendarDate)}
              checkedDate={checkedDate}
              onClick={handleClick}
            />
          </td>
        );
        calendarDate = addDays(calendarDate, INCREMENT);
      } else {
        week[weekI] = <td key={generateNumber()} />;
      }
    });
    return <tr key={generateNumber()}>{week}</tr>;
  });
};

function DatepickerTable({ date, onChange }) {
  console.log('DatepickerTable');
  const [checkedDate, setCheckedDate] = useState(getTime(date));

  const handleClick = useCallback(
    (btnDate) => {
      setCheckedDate(getTime(btnDate));
      onChange(getTime(btnDate));
    },
    [setCheckedDate, onChange],
  );

  const calendar = useMemo(() => generateCalendar(date, checkedDate, handleClick), [
    date,
    checkedDate,
    handleClick,
  ]);

  return <tbody>{calendar}</tbody>;
}

DatepickerTable.propTypes = {
  date: PropTypes.number,
  onChange: PropTypes.func,
};

export default DatepickerTable;
