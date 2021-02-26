import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropType from 'prop-types';
import './TaskPage.scss';
import EditTask from './EditTask/EditTask';
import TaskPageCalendar from './Calendar/Calendar';
import { useAuth } from '../../contexts/AuthContext';
import { startOfDay } from '../../libraries/date';

function TaskPage() {
  const { tasks, setTasks } = useAuth();
  const [state, setState] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(startOfDay(new Date()));

  const handleClick = () => {
    const newTask = {
      state,
      title,
      description,
      date,
    };

    tasks.push(newTask);
    setTasks(tasks.slice());
  };

  return (
    <div className="task-page">
      <div className="task-page__nav">
        <Link className="link" to="/">
          <div className="task-page__arrow arrow" />
          <div className="text_nowrap">Today{"' "}s Task</div>
        </Link>
      </div>
      <EditTask state={state} setState={setState} title={title} setTitle={setTitle} />
      <textarea
        className="task-page__description"
        name="dexcription"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <TaskPageCalendar date={date} setDate={setDate} />
      <div className="actions">
        <button type="button">Delete</button>
        <button type="button" onClick={handleClick}>
          Update
        </button>
      </div>
    </div>
  );
}

TaskPage.propTypes = {
  task: PropType.object,
};

export default TaskPage;
