import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskPage.scss';
import EditTask from './EditTask/EditTask';
import Datepicker from '../UI/Datepicker/Datepicker';
import { useAuth } from '../../contexts/AuthContext';
import { startOfDay } from '../../libraries/date';

function TaskPage({ currentTask, setCurrentTask }) {
  const { tasks, setTasks } = useAuth();
  const [task, setTask] = useState();
  const history = useHistory();
  const textContent = "Today's Task";
  const btnName = currentTask ? 'Update' : 'Save';
  let initTask = {
    checked: false,
    title: 'Title of your task',
    description: 'there is description your task',
    date: startOfDay(new Date()),
    id: Math.random() * 100,
  };

  if (currentTask) {
    initTask = currentTask;
  }

  setTask(initTask);

  const handleClick = ({ target: { name } }) => {
    if (!name === 'delete') {
      tasks.push(task);
      setTasks(tasks.slice());
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

  return (
    <div className="task-page">
      <div className="task-page__nav">
        <Link className="link" to="/">
          <div className="task-page__arrow arrow" />
          <div className="text_nowrap">{textContent}</div>
        </Link>
      </div>
      <EditTask checked={task.checked} title={task.title} onChange={handleChange} />
      <textarea
        className="task-page__description"
        name="dexcription"
        value={task.description}
        onChange={handleChange}
      />
      <Datepicker name="date" data={task.date} onChange={handleChange} />
      <div className="actions">
        <button type="button" name="delete" onClick={handleClick}>
          Delete
        </button>
        <button type="button" name={btnName} onClick={handleClick}>
          {btnName}
        </button>
      </div>
    </div>
  );
}

TaskPage.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
};

export default TaskPage;
