import './TaskList.scss';
import { useMemo } from 'react';
import { isEqual } from 'date-fns';
import Task from '../Task/Task';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';

// eslint-disable-next-line no-shadow
const createTaskList = (tasks, currentDate) => {
  console.log('create list');
  const taskList = [];
  Object.entries(tasks).forEach(([taskId, task], i) => {
    if (isEqual(task.date, currentDate)) {
      const taskCompanent = <Task key={i.toString()} task={task} taskId={taskId} />;
      taskList.push(taskCompanent);
    }
  });

  return taskList;
};

function TaskList() {
  console.log('taskList');
  const { tasks, currentDate } = useApp();

  const taskList = useMemo(() => createTaskList(tasks, currentDate), [currentDate, tasks]);

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
