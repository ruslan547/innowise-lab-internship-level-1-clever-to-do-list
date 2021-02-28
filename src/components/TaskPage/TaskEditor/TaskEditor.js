import './TaskEditor.scss';
import PropTypes from 'prop-types';

function TaskEditor({ checked, title, onChange }) {
  return (
    <div className="task">
      <input
        className="task__checkbox"
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <input className="task__text" type="text" value={title} name="title" onChange={onChange} />
    </div>
  );
}

TaskEditor.propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default TaskEditor;
