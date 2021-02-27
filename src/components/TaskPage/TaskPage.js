import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
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
    id: Math.random() * 100,
  };

  const { tasks, setTasks } = useAuth();
  const [task, setTask] = useState(currentTask || initTask);
  const history = useHistory();
  const textContent = "Today's Task";
  const btnName = currentTask ? 'Update' : 'Save';

  const handleClick = ({ target: { name } }) => {
    console.log('1log=', tasks);
    if (name !== 'delete') {
      console.log('there');
      setTasks([...tasks, task]);
    }
    console.log('2log=', tasks);
    setCurrentTask(null);
    console.log('3log=', tasks);
    history.push('/');
  };

  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'checkbox') {
      console.log(checked);
      setTask({ ...task, checked });
      console.log(task.checked);
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
        name="description"
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
  currentDate: PropTypes.object,
};

export default TaskPage;
