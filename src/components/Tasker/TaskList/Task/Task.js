import './Task.scss';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';

function Task({ task }) {
  const history = useHistory();

  const handleClick = (event) => {
    console.log(event);
    history.push('/task');
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
