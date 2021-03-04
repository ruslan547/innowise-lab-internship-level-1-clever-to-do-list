import './TaskList.scss';
import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Task from '../Task/Task';
import routeConstants from '../../shared/constants/routeConstants';
import { writeUserData } from '../../services/firebaseService';

const { TASK } = routeConstants;

function TaskList({ setCurrentTask, currentDate, tasks, setTasks, currentUser }) {
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

  const handleDoubleClick = useCallback(
    (task) => {
      const pulledTask = tasks.find((item) => item === task);
      const newTasks = tasks.filter((item) => item !== task);

      setCurrentTask(pulledTask);
      setTasks(newTasks);
      history.push(TASK);
      clearTimeout(timeoutId.current);
    },
    [tasks],
  );

  const handleChange = useCallback(
    async (task) => {
      task.checked = !task.checked;
      await setTasks([...tasks]);
      writeUserData(currentUser, tasks);
    },
    [tasks, currentUser],
  );

  tasks.forEach((item, i) => {
    if (+item.date === +currentDate) {
      const task = (
        <Task
          key={i.toString()}
          task={item}
          currentUser={currentUser}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onChange={handleChange}
        />
      );
      taskList.push(task);
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
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  currentUser: PropTypes.object,
};

export default TaskList;
