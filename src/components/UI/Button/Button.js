import './Button.scss';

function Button(params) {
  const { value } = params;
  return <input className="button" type="submit" value={value} />;
}

export default Button;
