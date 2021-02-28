import './Datepicker.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Header from './Header/Header';
import Table from './Table/Table';

function Datepicker({ data, onChange }) {
  const [date, setDate] = useState(new Date(data));

  return (
    <div className="datepicker" id="datepicker">
      <Header date={date} setDate={setDate} />
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wen</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>

        <Table date={date} onChange={onChange} />
      </table>
    </div>
  );
}

Datepicker.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};

export default Datepicker;
