import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropType from 'prop-types';
import './TaskPage.scss';
import EditTask from './EditTask/EditTask';
import Datepicker from '../UI/Datepicker/Datepicker';
import { useAuth } from '../../contexts/AuthContext';
import { startOfDay } from '../../libraries/date';

function TaskPage({ currentTask }) {
  const { tasks, setTasks } = useAuth();
  const [state, setState] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = () => {
    const newTask = {
      state,
      title,
      description,
      date: new Date(),
      id: Math.random() * 100,
    };

    tasks.push(newTask);
    setTasks(tasks.slice());
  };

  const handleChange = (event) => {
    console.log(event);
    setState();
    setTitle();
    setDescription();
  };

  return (
    <div className="task-page">
      <div className="task-page__nav">
        <Link className="link" to="/">
          <div className="task-page__arrow arrow" />
          <div className="text_nowrap">Today{"' "}s Task</div>
        </Link>
      </div>
      <EditTask state={state} title={title} onChange={handleChange} />
      <textarea
        className="task-page__description"
        name="dexcription"
        value={currentTask ? currentTask.description : description}
        onChange={handleChange}
      />
      <Datepicker data={startOfDay(new Date())} />
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
  currentTask: PropType.object,
};

export default TaskPage;
