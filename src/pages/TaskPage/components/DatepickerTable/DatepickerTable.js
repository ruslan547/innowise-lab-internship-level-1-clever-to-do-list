import './DatepickerTable.scss';
import PropTypes from 'prop-types';
import { startOfMonth, isSunday, getWeeksInMonth, addDays, getMonth } from 'date-fns';
import { useCallback, useState } from 'react';
import DatepickerTableButton from '../DatepickerTableButton/DatepickerTableButton';

const WEEK_DAYS = 7;
const INCREMENT = 1;

function DatepickerTable({ date, onChange }) {
  const [checkedDate, setCheckedDate] = useState(new Date(date));

  const handleClick = useCallback((btnDate) => {
    setCheckedDate(new Date(btnDate));
    onChange({ target: { name: 'date', value: btnDate } });
  }, []);

  const generateNumber = () => {
    return Math.random();
  };

  const generateCalendar = () => {
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
                date={new Date(calendarDate)}
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

  return <tbody>{generateCalendar()}</tbody>;
}

DatepickerTable.propTypes = {
  date: PropTypes.object,
  onChange: PropTypes.func,
};

export default DatepickerTable;
