import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TaskPage.scss';
import EditTask from './EditTask/EditTask';
import Datepicker from '../UI/Datepicker/Datepicker';
import { useAuth } from '../../contexts/AuthContext';
import { addZero, startOfDay } from '../../libraries/date';

function TaskPage({ currentTask, setCurrentTask, currentDate }) {
  const initTask = {
    checked: false,
    title: 'Title of your task',
    description: 'there is description your task',
    date: startOfDay(currentDate),
  };

  const { tasks, setTasks, writeUserData } = useAuth();
  const [task, setTask] = useState(currentTask || initTask);
  const history = useHistory();
  const [datepickerDisplay, setDatepickerDisplay] = useState({ display: 'none' });
  const textContent = "Today's Task";
  const btnName = currentTask ? 'Update' : 'Save';
  const { date } = task;
  const dateInfoContent = `${addZero(date.getMonth() + 1)}/${addZero(
    date.getDate(),
  )}/${date.getFullYear()}`;

  const handleClick = ({ target: { name } }) => {
    if (name !== 'delete') {
      setTasks(() => [...tasks, { ...task }]);
    }

    setCurrentTask(null);
    history.push('/');
  };

  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'checkbox') {
      setTask({ ...task, checked });
    } else {
      setTask({ ...task, [name]: value });
    }
  };

  const handleBackBtnClick = () => {
    if (currentTask) {
      setTasks([...tasks, { ...currentTask }]);
      setCurrentTask(null);
    }

    history.push('/');
  };

  const toggleDatepickerState = () => {
    const currentDisplay = datepickerDisplay.display;
    const display = currentDisplay === 'none' ? 'block' : 'none';
    setDatepickerDisplay({ display });
  };

  useEffect(() => {
    return () => writeUserData();
  });

  return (
    <die className="task-page">
      <div className="task-page__container">
        <div className="task-page__nav">
          <button
            type="button"
            name="back"
            className="task-page__back"
            onClick={handleBackBtnClick}
          >
            <div className="task-page__arrow arrow" />
            <div className="text_nowrap">{textContent}</div>
          </button>
        </div>
        <EditTask checked={task.checked} title={task.title} onChange={handleChange} />
        <textarea
          className="task-page__description"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
        <div className="date-control">
          <div className="date-control__info" type="text">
            {dateInfoContent}
          </div>
          <input type="button" value="date" onClick={toggleDatepickerState} />
        </div>
        <Datepicker
          display={datepickerDisplay}
          name="date"
          data={task.date}
          onChange={handleChange}
        />
      </div>
      <div className="actions">
        <button className="delete-btn btn" type="button" name="delete" onClick={handleClick}>
          Delete
        </button>
        <button className="save-btn btn" type="button" name={btnName} onClick={handleClick}>
          {btnName}
        </button>
      </div>
    </die>
  );
}

TaskPage.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
};

export default TaskPage;
