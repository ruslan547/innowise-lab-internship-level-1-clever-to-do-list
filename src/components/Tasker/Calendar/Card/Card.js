import './Card.scss';
import PropTypes from 'prop-types';

function Card(props) {
  const { date } = props;
  const day = date.getDay() + 1;

  const getNameDay = (data) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days[data];
  };

  return (
    <div className="card">
      <div className="card__day">
        <span className="card__text">{getNameDay(day)}</span>
        <span className="card__number">{day}</span>
      </div>
      <div className="card__board">
        <div className="card__pending" />
        <div className="card__fulfilled" />
      </div>
    </div>
  );
}

Card.propTypes = {
  date: PropTypes.object,
  tasks: PropTypes.array,
};

export default Card;
