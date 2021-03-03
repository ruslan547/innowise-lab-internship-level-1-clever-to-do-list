import './TaskList.scss';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

function TaskList({ setCurrentTask, currentDate, tasks, setTasks, currentUser }) {
  const taskList = [];

  tasks.forEach((item, i) => {
    if (+item.date === +currentDate) {
      const task = (
        <Task
          key={i.toString()}
          task={item}
          setCurrentTask={setCurrentTask}
          tasks={tasks}
          setTasks={setTasks}
          currentUser={currentUser}
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
