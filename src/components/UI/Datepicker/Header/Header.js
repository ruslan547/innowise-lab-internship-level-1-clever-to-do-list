import PropTypes from 'prop-types';
import './Header.scss';
import arrow from '../../../../img/arrow.svg';
import { getNameMonth } from '../../../../libraries/date';

function Header({ date, setDate }) {
  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const previousMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  return (
    <div className="datepicker-header">
      <button type="button" className="datepicker-header__btn" onClick={previousMonth}>
        <img className="datepicker-header__arrow_right" src={arrow} alt="" />
      </button>
      <div className="datepicker-header__date">{`${getNameMonth(date)} ${date.getFullYear()}`}</div>
      <button type="button" className="datepicker-header__btn" onClick={nextMonth}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

Header.propTypes = {
  date: PropTypes.object,
  setDate: PropTypes.func,
};

export default Header;
