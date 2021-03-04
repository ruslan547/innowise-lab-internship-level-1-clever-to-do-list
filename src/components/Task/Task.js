import './Task.scss';
import PropTypes from 'prop-types';

function Task({ task, onClick, onDoubleClick, onChange }) {
  return (
    <button
      type="button"
      className="task"
      onClick={onClick}
      onDoubleClick={() => onDoubleClick(task)}
    >
      <input
        className="task__input"
        type="checkbox"
        checked={task.checked}
        onChange={() => onChange(task)}
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
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Task;
