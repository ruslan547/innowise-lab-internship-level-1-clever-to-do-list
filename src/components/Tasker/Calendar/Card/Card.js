import './Card.scss';
import PropTypes from 'prop-types';
import { useAuth } from '../../../../contexts/AuthContext';
import { getNameDay } from '../../../../libraries/date';

function Card(props) {
  const { tasks } = useAuth();
  const { date } = props;
  const day = date.getDay();

  const checkPendingTasks = () => {
    return tasks.some((item) => {
      return item.date.getTime() === date.getTime() && !item.state;
    });
  };

  const checkFulfilledTasks = () => {
    return tasks.some((item) => {
      return item.date.getTime() === date.getTime() && item.state;
    });
  };

  return (
    <div className="card">
      <div className="card__day">
        <span className="card__text">{getNameDay(day)}</span>
        <span className="card__number">{date.getDate()}</span>
      </div>
      <div className="card__board">
        {checkPendingTasks() ? <div className="card__pending" /> : null}
        {checkFulfilledTasks() ? <div className="card__fulfilled" /> : null}
      </div>
    </div>
  );
}

Card.propTypes = {
  date: PropTypes.object,
  tasks: PropTypes.array,
};

export default Card;
