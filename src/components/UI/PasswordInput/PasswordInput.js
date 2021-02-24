import './PasswordInput.scss';

function PasswordInput(params) {
  const { value, placeholder, onChange } = params;

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

export default PasswordInput;
