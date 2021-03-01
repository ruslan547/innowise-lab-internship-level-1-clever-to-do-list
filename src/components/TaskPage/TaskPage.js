import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TaskPage.scss';
import EditTask from './TaskEditor/TaskEditor';
import { useAuth } from '../../contexts/AuthContext';
import DateEditor from './DateEditor/DateEditor';
import { startOfDay } from '../../date/date';
import Actions from './Actions/Actions';

function TaskPage({ currentTask, setCurrentTask, currentDate }) {
  const initTask = {
    checked: false,
    title: 'Title',
    description: 'description',
    date: startOfDay(currentDate),
  };

  const { tasks, setTasks, writeUserData } = useAuth();
  const [task, setTask] = useState(currentTask || initTask);
  const history = useHistory();
  const textContent = "Today's Task";

  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'checkbox') {
      setTask({ ...task, checked });
    } else {
      setTask({ ...task, [name]: value });
    }
  };

  const handleBackBtn = () => {
    if (currentTask) {
      setTasks([...tasks, { ...currentTask }]);
      setCurrentTask(null);
    }

    history.push('/tasker');
  };

  useEffect(() => {
    return () => writeUserData();
  });

  return (
    <div className="task-page">
      <div className="task-page__container">
        <div className="task-page__nav">
          <button type="button" name="back" className="task-page__back" onClick={handleBackBtn}>
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
        <DateEditor task={task} handleChange={handleChange} />
      </div>
      <Actions currentTask={currentTask} setCurrentTask={setCurrentTask} task={task} />
    </div>
  );
}

TaskPage.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
};

export default TaskPage;
