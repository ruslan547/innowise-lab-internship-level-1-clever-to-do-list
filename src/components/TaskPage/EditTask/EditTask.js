import './EditTask.scss';
import PropType from 'prop-types';

function EditTask({ state, setState, title, setTitle }) {
  return (
    <div className="task">
      <input
        className="task__checkbox"
        type="checkbox"
        checked={state}
        onChange={() => setState(!state)}
      />
      <input
        className="task__text"
        type="text"
        value={title}
        name="title"
        onChange={(event) => setTitle(event.target.value)}
      />
    </div>
  );
}

EditTask.propTypes = {
  state: PropType.bool,
  setState: PropType.func,
  title: PropType.string,
  setTitle: PropType.func,
};

export default EditTask;
