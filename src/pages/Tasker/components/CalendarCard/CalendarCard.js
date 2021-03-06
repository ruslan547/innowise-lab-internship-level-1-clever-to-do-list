import './CalendarCard.scss';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import isEqual from 'date-fns/isEqual';
import React, { useMemo } from 'react';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';

function CalendarCard({ date, onClick, createDayClass }) {
  const { tasks } = useApp();
  console.log('calendar card');

  const checkFulfilledTasks = useMemo(() => {
    return Object.values(tasks).some((item) => isEqual(item.date, date) && item.checked);
  }, [tasks]);

  const checkPendingTasks = useMemo(() => {
    return Object.values(tasks).some((item) => isEqual(item.date, date) && !item.checked);
  }, [tasks]);

  return (
    <button type="button" className="card btn" onClick={() => onClick(date)}>
      <div className={createDayClass(date)}>
        <span className="card__text">{format(date, 'eee')}</span>
        <span className="card__number">{date.getDate()}</span>
      </div>
      <div className="card__board">
        {checkPendingTasks ? <div className="card__pending" /> : null}
        {checkFulfilledTasks ? <div className="card__fulfilled" /> : null}
      </div>
    </button>
  );
}

CalendarCard.propTypes = {
  date: PropTypes.object,
  onClick: PropTypes.func,
  checkPendingTasks: PropTypes.func,
  checkFulfilledTasks: PropTypes.func,
  createDayClass: PropTypes.func,
};

export default React.memo(CalendarCard);
