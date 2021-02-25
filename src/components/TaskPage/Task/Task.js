import './Task.scss';
import PropType from 'prop-types';

function Task({ task, onChange }) {
  return (
    <div className="task">
      <input className="task__checkbox" type="checkbox" checked={task ? task.state : null} />
      <input
        className="task__text"
        type="text"
        value={task ? task.title : null}
        name="title"
        onChange={onChange}
      />
    </div>
  );
}

Task.propTypes = {
  task: PropType.object,
  onChange: PropType.func,
};

export default Task;
