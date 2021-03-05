import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { writeUserData } from '../../core/services/firebaseService';
import './TaskPage.scss';
import EditTask from './components/TaskEditor/TaskEditor';
import DateEditor from './components/DateEditor/DateEditor';
import { startOfDay } from '../../core/date/date';
import Actions from './components/Actions/Actions';
import routeConstants from '../../core/constants/routeConstants';

const { TASKER } = routeConstants;

function TaskPage({ currentTask, setCurrentTask, currentDate, tasks, setTasks, currentUser }) {
  const initTask = {
    checked: false,
    title: 'Title',
    description: 'description',
    date: startOfDay(currentDate),
  };

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

  const handleBackBtn = async () => {
    if (currentTask) {
      await setTasks(() => [...tasks, { ...currentTask }]);
      setCurrentTask(null);
    }

    history.push(TASKER);
  };

  useEffect(() => {
    return () => writeUserData(currentUser, tasks);
  }, [currentUser, tasks]);

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
        <DateEditor task={task} onChange={handleChange} />
      </div>
      <Actions
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        currentUser={currentUser}
      />
    </div>
  );
}

TaskPage.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  currentUser: PropTypes.object,
};

export default TaskPage;
