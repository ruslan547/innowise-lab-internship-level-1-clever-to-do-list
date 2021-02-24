import './Alert.scss';

function Alert(params) {
  const { value } = params;

  if (value) {
    return <div className="alert">{params.value}</div>;
  }

  return null;
}

export default Alert;
