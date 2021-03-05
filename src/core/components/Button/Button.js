import './Button.scss';
import PropTypes from 'prop-types';

function Button({ value, disabled }) {
  return <input className="button" type="submit" value={value} disabled={disabled} />;
}

Button.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
