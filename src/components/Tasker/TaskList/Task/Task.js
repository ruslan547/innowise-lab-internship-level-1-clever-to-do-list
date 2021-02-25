import './Task.scss';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

function Task({ task }) {
  return (
    // здесь поменять состояние currentTask
    <Link className="task" onClick={() => console.log('task')} to="/task">
      <input
        className="task__input"
        type="checkbox"
        checked={task.state}
        onChange={() => console.log('checkbox of task')}
      />
      <span className="task__text">{task.titele}</span>
    </Link>
  );
}

Task.propTypes = {
  task: PropType.object,
};

export default Task;
