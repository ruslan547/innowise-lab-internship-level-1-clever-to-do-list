import './TaskList.scss';
import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Task from '../Task/Task';
import routeConstants from '../../../../core/constants/routeConstants';
import { updateUserData } from '../../../../core/services/firebaseService';

const { TASK } = routeConstants;

function TaskList({
  setCurrentTask,
  setCurrentTaskId,
  currentDate,
  tasks,
  currentUser,
  setAction,
}) {
  const history = useHistory();
  const taskList = [];
  const timeoutId = useRef();
  const delay = 200;

  const handleClick = useCallback(() => {
    timeoutId.current = setTimeout(() => {
      // eslint-disable-next-line no-useless-return
      return;
    }, delay);
  }, []);

  const handleDoubleClick = useCallback((taskId, task) => {
    setCurrentTask(task);
    setCurrentTaskId(taskId);
    setAction('Update');
    history.push(TASK);
    clearTimeout(timeoutId.current);
  }, []);

  const handleChange = useCallback(async (taskId, task) => {
    task.checked = !task.checked;
    updateUserData(currentUser, { [taskId]: { ...task } });
  }, []);

  Object.entries(tasks).forEach(([taskId, task], i) => {
    if (+task.date === +currentDate) {
      const taskCompanent = (
        <Task
          key={i.toString()}
          task={task}
          taskId={taskId}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onChange={handleChange}
        />
      );
      taskList.push(taskCompanent);
    }
  });

  return [
    <div className="task-count" key={22}>
      {taskList.length} Tasks Today
    </div>,
    <ul className="task-list" key={11}>
      {taskList}
    </ul>,
  ];
}

TaskList.propTypes = {
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
  tasks: PropTypes.object,
  setTasks: PropTypes.func,
  currentUser: PropTypes.object,
  setAction: PropTypes.func,
};

export default TaskList;
