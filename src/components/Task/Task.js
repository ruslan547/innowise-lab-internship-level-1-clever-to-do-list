import './Task.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { writeUserData } from '../../services/firebaseService';
import routeConstants from '../../shared/constants/routeConstants';

const { TASK } = routeConstants;

function Task({ task, setCurrentTask, tasks, setTasks, currentUser }) {
  const history = useHistory();
  let timeoutId;
  const delay = 200;

  const handleChange = () => {
    task.checked = !task.checked;
    setTasks([...tasks]);
  };

  const handleClick = () => {
    timeoutId = setTimeout(() => {
      // eslint-disable-next-line no-useless-return
      return;
    }, delay);
  };

  const handleDoubleClick = () => {
    const pulledTask = tasks.find((item) => item === task);
    const newTasks = tasks.filter((item) => item !== task);

    setCurrentTask(pulledTask);
    setTasks(newTasks);
    history.push(TASK);
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    return () => writeUserData(currentUser, tasks);
  }, [currentUser, tasks]);

  return (
    <button type="button" className="task" onClick={handleClick} onDoubleClick={handleDoubleClick}>
      <input
        className="task__input"
        type="checkbox"
        checked={task.checked}
        onChange={handleChange}
      />
      {task.title}
    </button>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  setCurrentTask: PropTypes.func,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  currentUser: PropTypes.object,
};

export default Task;
