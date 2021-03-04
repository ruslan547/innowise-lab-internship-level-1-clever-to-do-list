import './DateEditor.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { addZero } from '../../shared/date/date';
import Datepicker from '../Datepicker/Datepicker';

function DateEditor({ task: { date }, onChange }) {
  const [datepickerDisplay, setDatepickerDisplay] = useState(false);
  const dateInfoContent = `${addZero(date.getMonth() + 1)}/${addZero(
    date.getDate(),
  )}/${date.getFullYear()}`;

  return (
    <div>
      <div className="date-control">
        <div className="date-control__info" type="text">
          {dateInfoContent}
        </div>
        <input
          type="button"
          value="date"
          onClick={() => {
            setDatepickerDisplay(!datepickerDisplay);
          }}
        />
      </div>
      {datepickerDisplay ? <Datepicker name="date" data={date} onChange={onChange} /> : null}
    </div>
  );
}

DateEditor.propTypes = {
  task: PropTypes.object,
  onChange: PropTypes.func,
};

export default DateEditor;
