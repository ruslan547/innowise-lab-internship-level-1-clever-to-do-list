import './TaskList.scss';
import PropTypes from 'prop-types';
import Task from './Task/Task';

function TaskList({ tasks }) {
  const taskList = tasks.map((item, i) => <Task key={i.toString()} task={item} />);

  return <div className="task-list">{taskList}</div>;
}

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
