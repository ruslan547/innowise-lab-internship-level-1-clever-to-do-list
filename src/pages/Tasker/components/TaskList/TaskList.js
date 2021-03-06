import './TaskList.scss';
import { useCallback, useMemo, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { isEqual } from 'date-fns';
import Task from '../Task/Task';
import routeConstants from '../../../../core/constants/routeConstants';
import { updateUserData } from '../../../../core/services/firebaseService';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';

const { TASK } = routeConstants;

function TaskList() {
  const {
    setCurrentTask,
    setCurrentTaskId,
    setAction,
    currentUser,
    tasks,
    setTasks,
    currentDate,
  } = useApp();
  const history = useHistory();
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

  const handleChange = useCallback(
    async (taskId, task) => {
      task.checked = !task.checked;
      await updateUserData(currentUser, { [taskId]: { ...task } });
      setTasks({ ...tasks });
    },
    [tasks],
  );

  // eslint-disable-next-line no-shadow
  const createTaskList = (tasks) => {
    const taskList = [];
    Object.entries(tasks).forEach(([taskId, task], i) => {
      if (isEqual(task.date, currentDate)) {
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

    return taskList;
  };

  const taskList = useMemo(() => createTaskList(tasks), [currentDate, tasks]);

  // Object.entries(tasks).forEach(([taskId, task], i) => {
  //   if (isEqual(task.date, currentDate)) {
  //     const taskCompanent = (
  //       <Task
  //         key={i.toString()}
  //         task={task}
  //         taskId={taskId}
  //         onClick={handleClick}
  //         onDoubleClick={handleDoubleClick}
  //         onChange={handleChange}
  //       />
  //     );
  //     taskList.push(taskCompanent);
  //   }
  // });

  return [
    <div className="task-count" key={22}>
      {taskList.length} Tasks Today
    </div>,
    <ul className="task-list" key={11}>
      {taskList}
    </ul>,
  ];
}

export default TaskList;
