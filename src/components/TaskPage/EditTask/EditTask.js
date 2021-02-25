import './EditTask.scss';
import PropType from 'prop-types';

function EditTask({ task, onChange }) {
  return (
    <div className="task">
      <input
        className="task__checkbox"
        type="checkbox"
        checked={task ? task.state : null}
        onChange={onChange}
      />
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

EditTask.propTypes = {
  task: PropType.object,
  onChange: PropType.func,
};

export default EditTask;
