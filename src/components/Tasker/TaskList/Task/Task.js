import './Task.scss';
import PropType from 'prop-types';

function Task({ task }) {
  return (
    <div className="task">
      <input className="task__input" type="checkbox" checked={task.state} />
      <span className="task__text">{task.titele}</span>
    </div>
  );
}

Task.propTypes = {
  task: PropType.object,
};

export default Task;
