import './Table.scss';
import PropTypes from 'prop-types';

// const WEEK_DAYS = 7;
// const MONTH_COUNT = 11;
// const SUN = 0;
// const MON = 1;

function Table({ date }) {
  const D1 = new Date(date);
  const D1last = new Date(D1.getFullYear(), D1.getMonth() + 1, 0).getDate();
  const D1Nlast = new Date(D1.getFullYear(), D1.getMonth(), D1last).getDay();
  const D1Nfirst = new Date(D1.getFullYear(), D1.getMonth(), 1).getDay();
  const calendar = [];
  let week = [];

  if (D1Nfirst !== 0) {
    for (let i = 0; i < D1Nfirst; i++) week.push(<td />);
  } else {
    for (let i = 0; i < 6; i++) week.push(<td />);
  }

  for (let i = 1; i <= D1last; i++) {
    if (i !== D1.getDate()) {
      week.push(<td key={String(i)}>{i}</td>);
    } else {
      week.push(<td className="today">{i}</td>);
    }

    if (new Date(D1.getFullYear(), D1.getMonth(), i).getDay() === 6) {
      calendar.push(<tr>{week.slice()}</tr>);
      week = [];
    }
  }

  if (D1Nlast !== 0) {
    for (let i = D1Nlast; i < 7; i++) week.push(<td />);
  }

  calendar.push(<tr>{week}</tr>);
  return calendar;
}

Table.propTypes = {
  date: PropTypes.object,
  setDate: PropTypes.func,
};

export default Table;
