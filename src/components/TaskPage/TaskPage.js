import { Link } from 'react-router-dom';
import './TaskPage.scss';

function TaskPage() {
  return (
    <div className="task-page">
      <div className="task-page__nav">
        <Link className="link" to="/register">
          <div className="arrow" />
          Today{"' "}s Task
        </Link>
      </div>
    </div>
  );
}

export default TaskPage;
