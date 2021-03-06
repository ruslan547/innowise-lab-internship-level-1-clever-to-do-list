import './TaskEditor.scss';
import PropTypes from 'prop-types';

function TaskEditor({ checked, title, setChecked, setTitle }) {
  return (
    <div className="task">
      <input
        className="task__checkbox"
        type="checkbox"
        name="checkbox"
        checked={checked}
        // eslint-disable-next-line no-shadow
        onChange={({ target: { checked } }) => setChecked(checked)}
      />
      <input
        className="task__text"
        type="text"
        value={title}
        name="title"
        onChange={({ target: { value } }) => setTitle(value)}
      />
    </div>
  );
}

TaskEditor.propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string,
  setChecked: PropTypes.func,
  setTitle: PropTypes.func,
};

export default TaskEditor;
