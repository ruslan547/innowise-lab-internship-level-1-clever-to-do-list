import { useState } from 'react';
import './Form.scss';
// import firebase from 'firebase';

function SigninForm() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, ...{ [name]: value } });
  };

  // const handleClick = () => {
  // }

  return (
    <form className="signin-form">
      <input
        className="signin-form__text"
        type="text"
        name="login"
        value={user.login}
        placeholder="Login"
        onChange={handleChange}
      />
      <input
        className="signin-form__password"
        type="password"
        name="password"
        value={user.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <input className="signin-form__btn" type="submit" value="Sign in" />
    </form>
  );
}

export default SigninForm;
