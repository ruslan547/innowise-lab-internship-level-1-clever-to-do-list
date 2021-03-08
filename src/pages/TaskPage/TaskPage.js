import { useHistory } from 'react-router-dom';
import './TaskPage.scss';
import { useCallback, useMemo, useState } from 'react';
import { getTime } from 'date-fns';
import EditTask from './components/TaskEditor/TaskEditor';
import DateEditor from './components/DateEditor/DateEditor';
import Actions from './components/Actions/Actions';
import routeConstants from '../../core/constants/routeConstants';
import { useApp } from '../../core/components/AppProvider/AppProvider';

const { TASKER } = routeConstants;

function TaskPage() {
  console.log('TaskPage');
  const { currentTask, setCurrentTask, setCurrentTaskId, currentDate } = useApp();
  const [checked, setChecked] = useState(currentTask ? currentTask.checked : false);
  const [title, setTitle] = useState(currentTask ? currentTask.title : '');
  const [description, setDescription] = useState(currentTask ? currentTask.description : '');
  const [date, setDate] = useState(currentTask ? currentTask.date : getTime(currentDate));
  const history = useHistory();
  const textContent = "Today's Task";
  const task = useMemo(() => ({ checked, title, description, date }), [
    checked,
    title,
    description,
    date,
  ]);

  const handleClick = () => {
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
        <EditTask
          checked={checked}
          title={title}
          setChecked={useCallback(setChecked, [setChecked])}
          setTitle={useCallback(setTitle, [setTitle])}
        />
        <textarea
          className="task-page__description"
          name="description"
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
        />
        <DateEditor date={date} setDate={useCallback(setDate, [setDate])} />
      </div>
      <Actions task={task} />
    </div>
  );
}

export default TaskPage;
