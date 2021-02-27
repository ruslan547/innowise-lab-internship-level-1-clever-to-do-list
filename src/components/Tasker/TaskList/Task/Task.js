import './Task.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';

function Task({ task, setCurrentTask }) {
  const history = useHistory();
  const { tasks, setTasks } = useAuth();
  let timer = 0;
  const delay = 200;

  const handleChange = () => {
    const newTasks = tasks.filter((item) => item !== task);
    task.checked = !task.checked;
    setTasks([...newTasks, task]);
  };

  const handleClick = () => {
    timer = setTimeout(() => {
      return 0;
    }, delay);
  };

  const handleDoubleClick = () => {
    const pulledTask = tasks.find((item) => item === task);
    const newTasks = tasks.filter((item) => item !== task);

    setCurrentTask(pulledTask);
    setTasks(newTasks);
    history.push('/task');
    clearTimeout(timer);
  };

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
};

export default Task;
