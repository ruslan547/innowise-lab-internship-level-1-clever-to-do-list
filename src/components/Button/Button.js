import './Button.scss';

function Button(params) {
  const { value, disabled } = params;
  return <input className="button" type="submit" value={value} disabled={disabled} />;
}

export default Button;
