import { Link } from 'react-router-dom';
import './TaskPage.scss';

function TaskPage() {
  return (
    <div className="task-page">
      <div className="task-page__nav">
        <Link className="signin__link" to="/register">
          Today{"' "}s Task
          <div className="signin__arrow" />
        </Link>
      </div>
    </div>
  );
}

export default TaskPage;
