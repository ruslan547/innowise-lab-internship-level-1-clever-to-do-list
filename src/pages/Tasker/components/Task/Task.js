import './Task.scss';
import PropTypes from 'prop-types';

function Task({ task, taskId, onClick, onDoubleClick, onChange }) {
  console.log('Task');
  return (
    <button
      type="button"
      className="task"
      onClick={onClick}
      onDoubleClick={() => onDoubleClick(taskId, task)}
    >
      <input
        className="task__input"
        type="checkbox"
        checked={task.checked}
        onChange={() => onChange(taskId, task)}
      />
      {task.title}
    </button>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  taskId: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Task;
