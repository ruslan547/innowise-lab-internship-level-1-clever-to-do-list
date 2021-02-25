import './Calendar.scss';
import PropType from 'prop-types';

function TaskPageCalendar({ date }) {
  return <div>{date.toString()}</div>;
}

TaskPageCalendar.propTypes = {
  date: PropType.object,
};

export default TaskPageCalendar;
