import './Task.scss';
import PropType from 'prop-types';

function Task({ task } = null) {
  return (
    <div className="task">
      <input className="task__checkbox" type="checkbox" checked={task ? task.state : null} />
      <input className="task__text" type="text" value={task ? task.titele : null} />
    </div>
  );
}

Task.propTypes = {
  task: PropType.object,
};

export default Task;
