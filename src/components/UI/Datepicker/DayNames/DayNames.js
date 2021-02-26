import './DayNames.scss';

function DayNames() {
  const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
  const week = [];
  days.forEach((item) => {
    week.push(<th className="day">{item}</th>);
  });

  return <tr>{week}</tr>;
}

export default DayNames;
