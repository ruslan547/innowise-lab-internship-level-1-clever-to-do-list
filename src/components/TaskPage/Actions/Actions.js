import './Actions.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function Actions({ currentTask, setCurrentTask, task }) {
  const { tasks, setTasks } = useAuth();
  const history = useHistory();
  const btnName = currentTask ? 'Update' : 'Save';

  const handleClick = ({ target: { name } }) => {
    if (name !== 'delete') {
      setTasks(() => [...tasks, { ...task }]);
    }

    setCurrentTask(null);
    history.push('/');
  };

  return (
    <div className="actions">
      <button className="delete-btn btn" type="button" name="delete" onClick={handleClick}>
        Delete
      </button>
      <button className="save-btn btn" type="button" name={btnName} onClick={handleClick}>
        {btnName}
      </button>
    </div>
  );
}

Actions.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  task: PropTypes.object,
};

export default Actions;
