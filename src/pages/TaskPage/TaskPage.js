import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TaskPage.scss';
import { useState } from 'react';
import EditTask from './components/TaskEditor/TaskEditor';
import DateEditor from './components/DateEditor/DateEditor';
import Actions from './components/Actions/Actions';
import routeConstants from '../../core/constants/routeConstants';
import { pushUserData, updateUserData, writeUserData } from '../../core/services/firebaseService';

const { TASKER } = routeConstants;

function TaskPage({
  currentDate,
  currentTask,
  setCurrentTask,
  currentTaskId,
  setCurrentTaskId,
  tasks,
  currentUser,
  action,
}) {
  const [checked, setChecked] = useState(currentTask ? currentTask.checked : false);
  const [title, setTitle] = useState(currentTask ? currentTask.title : '');
  const [description, setDescription] = useState(currentTask ? currentTask.description : '');
  const [date, setDate] = useState(currentTask ? currentTask.date : new Date(currentDate));
  const history = useHistory();
  const textContent = "Today's Task";

  const handleClick = ({ target: { name } }) => {
    const task = { checked, title, description, date };
    if (name === 'Save') {
      pushUserData(currentUser, { ...task });
    } else if (name === 'Update') {
      updateUserData(currentUser, { [currentTaskId]: { ...task } });
    } else if (name === 'delete') {
      delete tasks[currentTaskId];
      writeUserData(currentUser, tasks);
    }

    setCurrentTask(null);
    setCurrentTaskId(null);
    history.push(TASKER);
  };

  return (
    <div className="task-page">
      <div className="task-page__container">
        <div className="task-page__nav">
          <button type="button" name="back" className="task-page__back" onClick={handleClick}>
            <div className="task-page__arrow arrow" />
            <div className="text_nowrap">{textContent}</div>
          </button>
        </div>
        <EditTask checked={checked} title={title} setChecked={setChecked} setTitle={setTitle} />
        <textarea
          className="task-page__description"
          name="description"
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
        />
        <DateEditor date={date} onChange={setDate} />
      </div>
      <Actions onClick={handleClick} action={action} />
    </div>
  );
}

TaskPage.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  tasks: PropTypes.object,
  currentUser: PropTypes.object,
  currentTaskId: PropTypes.string,
  action: PropTypes.string,
  currentDate: PropTypes.object,
  setCurrentTaskId: PropTypes.func,
};

export default TaskPage;
