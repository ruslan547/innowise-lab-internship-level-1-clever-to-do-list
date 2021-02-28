import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TaskPage.scss';
import EditTask from './EditTask/EditTask';
import Datepicker from '../UI/Datepicker/Datepicker';
import { useAuth } from '../../contexts/AuthContext';
import { startOfDay } from '../../libraries/date';

function TaskPage({ currentTask, setCurrentTask, currentDate }) {
  const initTask = {
    checked: false,
    title: 'Title of your task',
    description: 'there is description your task',
    date: startOfDay(currentDate),
  };

  const { tasks, setTasks, writeUserData } = useAuth();
  const [task, setTask] = useState(currentTask || initTask);
  const saveForBack = { ...task };
  const history = useHistory();
  const textContent = "Today's Task";
  const btnName = currentTask ? 'Update' : 'Save';
  const { date } = task;

  const handleClick = async ({ target: { name } }) => {
    if (name !== 'delete') {
      await setTasks(() => [...tasks, { ...task }]);
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

  useEffect(() => {
    return () => writeUserData();
  });

  const back = () => {
    setTasks([...tasks, { ...saveForBack }]);
    setCurrentTask(null);
    history.push('/');
  };

  const showDatepicker = () => {
    const datepicer = document.querySelector('#datepicker');
    datepicer.style.display = 'block';
  };

  return (
    <div className="task-page">
      <div className="task-page__nav">
        <button type="button" className="task-page__back" onClick={back}>
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
      <input type="text" value={`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`} />
      <input type="button" value="date" onClick={showDatepicker} />
      <Datepicker name="date" data={task.date} onChange={handleChange} />
      <div className="actions">
        <button className="delete-btn btn" type="button" name="delete" onClick={handleClick}>
          Delete
        </button>
        <button className="save-btn btn" type="button" name={btnName} onClick={handleClick}>
          {btnName}
        </button>
      </div>
    </div>
  );
}

TaskPage.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
};

export default TaskPage;
