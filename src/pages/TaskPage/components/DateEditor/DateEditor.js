import './DateEditor.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Datepicker from '../Datepicker/Datepicker';

function DateEditor({ date, onChange }) {
  const [datepickerDisplay, setDatepickerDisplay] = useState(false);

  return (
    <div>
      <div className="date-control">
        <div className="date-control__info" type="text">
          {format(date, 'P')}
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
  date: PropTypes.object,
  onChange: PropTypes.func,
};

export default DateEditor;
