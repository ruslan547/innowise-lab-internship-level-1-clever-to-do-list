import { useState } from 'react';
import './Form.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

function SigninForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, ...{ [name]: value } });
  };

  const handleClick = async ({ email, password }, event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form className="signin-form" onSubmit={console.log('sub')}>
      <input
        className="signin-form__email"
        type="email"
        name="email"
        value={user.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        className="signin-form__password"
        type="password"
        name="password"
        value={user.password}
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input
        className="signin-form__btn"
        type="submit"
        value="Sign in"
        onClick={(event) => handleClick(user, event)}
      />
    </form>
  );
}

export default SigninForm;
