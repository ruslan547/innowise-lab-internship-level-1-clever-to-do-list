import './TaskList.scss';
import PropTypes from 'prop-types';
import Task from './Task/Task';
import { useAuth } from '../../../contexts/AuthContext';

function TaskList({ setCurrentTask, currentDate }) {
  const { tasks } = useAuth();
  const taskList = [];

  tasks.forEach((item) => {
    if (item.date.getTime() === currentDate.getTime()) {
      const task = <Task key={item.id} task={item} setCurrentTask={setCurrentTask} />;
      taskList.push(task);
    }
  });

  return <ul className="task-list">{taskList}</ul>;
}

TaskList.propTypes = {
  currantTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.func,
};

export default TaskList;
