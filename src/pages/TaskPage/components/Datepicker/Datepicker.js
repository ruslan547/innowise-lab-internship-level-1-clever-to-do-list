import './Datepicker.scss';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import DatepickerHeader from '../DatepickerHeader/DatepickerHeader';
import DatepickerTable from '../DatepickerTable/DatepickerTable';

function Datepicker({ data, onChange }) {
  console.log('Datepicker');
  const [date, setDate] = useState(new Date(data));

  return (
    <div className="datepicker" id="datepicker">
      <DatepickerHeader date={date} setDate={useCallback(setDate, [setDate])} />
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

        <DatepickerTable date={date} onChange={onChange} />
      </table>
    </div>
  );
}

Datepicker.propTypes = {
  data: PropTypes.number,
  onChange: PropTypes.func,
};

export default Datepicker;
