import { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

function Form(props) {
  const { children, onSubmit } = props;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, ...{ [name]: value } });
  };

  return (
    <form className="form" onSubmit={(event) => onSubmit(user, event)}>
      <input
        className="form__email"
        type="email"
        name="email"
        value={user.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        className="form__password"
        type="password"
        name="password"
        value={user.password}
        placeholder="Password"
        onChange={handleChange}
        required
      />
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.element.isRequired,
  onSubmit: PropTypes.func,
};

export default Form;
