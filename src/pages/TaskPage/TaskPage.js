import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TaskPage.scss';
import EditTask from './components/TaskEditor/TaskEditor';
import DateEditor from './components/DateEditor/DateEditor';
import Actions from './components/Actions/Actions';
import routeConstants from '../../core/constants/routeConstants';
import { pushUserData, updateUserData, writeUserData } from '../../core/services/firebaseService';

const { TASKER } = routeConstants;

function TaskPage({ currentTask, setCurrentTask, currentTaskId, tasks, currentUser, action }) {
  const history = useHistory();
  const textContent = "Today's Task";

  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'checkbox') {
      setCurrentTask({ ...currentTask, checked });
    } else {
      setCurrentTask({ ...currentTask, [name]: value });
    }
  };

  const handleClick = ({ target: { name } }) => {
    if (name === 'Save') {
      pushUserData(currentUser, currentTask);
    } else if (name === 'Update') {
      updateUserData(currentUser, { [currentTaskId]: currentTask });
    } else if (name === 'delete') {
      delete tasks[currentTaskId];
      writeUserData(currentUser, tasks);
    }

    setCurrentTask(null);
    history.push(TASKER);
  };

  return (
    <div className="task-page">
      <div className="task-page__container">
        <div className="task-page__nav">
          <button type="button" name="back" className="task-page__back" onClick={handleClick}>
            <div className="task-page__arrow arrow" />
            <div className="text_nowrap">{textContent}</div>
          </button>
        </div>
        <EditTask checked={currentTask.checked} title={currentTask.title} onChange={handleChange} />
        <textarea
          className="task-page__description"
          name="description"
          value={currentTask.description}
          onChange={handleChange}
        />
        <DateEditor currentTask={currentTask} onChange={handleChange} />
      </div>
      <Actions onClick={handleClick} action={action} />
    </div>
  );
}

TaskPage.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  tasks: PropTypes.object,
  currentUser: PropTypes.object,
  currentTaskId: PropTypes.string,
  action: PropTypes.string,
};

export default TaskPage;
