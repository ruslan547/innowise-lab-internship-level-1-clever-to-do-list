import './Datepicker.scss';
import PropType from 'prop-types';
import { useState } from 'react';
import Header from './Header/Header';
import Table from './Table/Table';

function Datepicker({ data }) {
  console.log(data);
  const [date, setDate] = useState(data);
  console.log(date);
  return (
    <div className="datepicker">
      <Header date={date} setDate={setDate} />
      <table>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wen</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
        <Table date={date} setDate={setDate} />
      </table>
    </div>
  );
}

Datepicker.propTypes = {
  data: PropType.object,
};

export default Datepicker;
