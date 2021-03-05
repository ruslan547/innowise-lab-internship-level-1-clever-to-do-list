import './Actions.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import routeConstants from '../../../../core/constants/routeConstants';
import { writeUserData } from '../../../../core/services/firebaseService';

const { TASKER } = routeConstants;

function Actions({ currentTask, setCurrentTask, task, tasks, setTasks, currentUser }) {
  const history = useHistory();
  const btnName = currentTask ? 'Update' : 'Save';

  const handleClick = async ({ target: { name } }) => {
    if (name !== 'delete') {
      await setTasks(() => [...tasks, { ...task }]);
    }

    writeUserData(currentUser, tasks);
    setCurrentTask(null);
    history.push(TASKER);
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
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  currentUser: PropTypes.object,
};

export default Actions;
