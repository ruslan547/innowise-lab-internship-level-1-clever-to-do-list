import './Task.scss';
import PropType from 'prop-types';

function Task({ task }) {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <button type="button" className="task" onClick={handleClick}>
      <input className="task__input" type="checkbox" checked={task.state} />
      <span className="task__text">{task.titele}</span>
    </button>
  );
}

Task.propTypes = {
  task: PropType.object,
};

export default Task;
