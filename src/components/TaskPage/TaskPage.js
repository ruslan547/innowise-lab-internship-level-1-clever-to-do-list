import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import Task from './Task/Task';
import './TaskPage.scss';
import TaskPageCalendar from './Calendar/Calendar';

const fakeTask = {
  date: new Date('2019-01-26'),
  state: false,
  title: 'JS',
  text: 'sadldfdsgre',
};

function TaskPage({ task }) {
  task = fakeTask;
  const handChange = (event) => {
    console.log(event);
  };

  return (
    <div className="task-page">
      <div className="task-page__nav">
        <Link className="link" to="/register">
          <div className="task-page__arrow arrow" />
          <div className="text_nowrap">Today{"' "}s Task</div>
        </Link>
      </div>
      <Task task={task} onChange={handChange} />
      <textarea
        className="task-page__description"
        name="dexcription"
        value={task.text}
        onChange={handChange}
      />
      <TaskPageCalendar date={task.date} />
      <div className="actions">
        <button type="button">Delete</button>
        <button type="button">Update</button>
      </div>
    </div>
  );
}

TaskPage.propTypes = {
  task: PropType.object,
};

export default TaskPage;
