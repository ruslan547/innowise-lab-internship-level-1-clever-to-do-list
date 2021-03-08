import './Task.scss';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';
import { updateUserData } from '../../../../core/services/firebaseService';
import routeConstants from '../../../../core/constants/routeConstants';
import actionConstants from '../../../../core/constants/actionConstants';

const { TASK } = routeConstants;
const { UPDATE } = actionConstants;
const DELAY = 200;

function Task({ task, taskId }) {
  const { setTasks, currentUser, tasks, setCurrentTask, setCurrentTaskId, setAction } = useApp();
  const history = useHistory();
  const timeoutId = useRef();

  const handleChange = async () => {
    task.checked = !task.checked;
    await updateUserData(currentUser, { [taskId]: { ...task } });
    setTasks({ ...tasks });
  };

  const handleClick = () => {
    timeoutId.current = setTimeout(() => {
      // eslint-disable-next-line no-useless-return
      return;
    }, DELAY);
  };

  const handleDoubleClick = () => {
    setCurrentTask(task);
    setCurrentTaskId(taskId);
    setAction(UPDATE);
    history.push(TASK);
    clearTimeout(timeoutId.current);
  };

  return (
    <li>
      <button
        type="button"
        className="task"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <input
          className="task__input"
          type="checkbox"
          checked={task.checked}
          onChange={handleChange}
        />
        {task.title}
      </button>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  taskId: PropTypes.string,
};

export default React.memo(Task);
