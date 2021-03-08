import './Task.scss';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';
import { updateUserData } from '../../../../core/services/firebaseService';
import routeConstants from '../../../../core/constants/routeConstants';

const { TASK } = routeConstants;
const UPDATE_ACTION = 'Update';

function Task({ task, taskId }) {
  console.log('Task');
  const { setTasks, currentUser, tasks, setCurrentTask, setCurrentTaskId, setAction } = useApp();
  const history = useHistory();
  const timeoutId = useRef();
  const delay = 200;

  const handleChange = async () => {
    task.checked = !task.checked;
    await updateUserData(currentUser, { [taskId]: { ...task } });
    setTasks({ ...tasks });
  };

  const handleClick = () => {
    timeoutId.current = setTimeout(() => {
      // eslint-disable-next-line no-useless-return
      return;
    }, delay);
  };

  const handleDoubleClick = () => {
    setCurrentTask(task);
    setCurrentTaskId(taskId);
    setAction(UPDATE_ACTION);
    history.push(TASK);
    clearTimeout(timeoutId.current);
  };

  return (
    <button type="button" className="task" onClick={handleClick} onDoubleClick={handleDoubleClick}>
      <input
        className="task__input"
        type="checkbox"
        checked={task.checked}
        onChange={handleChange}
      />
      {task.title}
    </button>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  taskId: PropTypes.string,
};

export default React.memo(Task);
