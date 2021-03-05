import './PasswordInput.scss';
import PropTypes from 'prop-types';

function PasswordInput({ value, placeholder, onChange }) {
  return (
    <input
      className="password-input"
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

PasswordInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default PasswordInput;
