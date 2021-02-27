import './EditTask.scss';
import PropTypes from 'prop-types';

function EditTask({ checked, title, onChange }) {
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

EditTask.propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default EditTask;
