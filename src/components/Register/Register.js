import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import Form from '../UI/Form/Form';
import './Register.scss';
import { useAuth } from '../../contexts/AuthContext';
import Alert from '../UI/Alert/Alert';
import PasswordInput from '../UI/PasswordInput/PasswordInput';

function Register() {
  const { register } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async ({ email, password }, event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError(null);
      setLoading(true);
      await register(email, password);
      history.push('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  };

  const handleChange = (event) => setConfirmPassword(event.target.value);

  return (
    <div className="register">
      <div className="register__nav">
        <Link className="link" to="/signin">
          <div className="register__arrow arrow" />
          Sign in
        </Link>
      </div>
      <Alert value={error} />
      <Form onSubmit={handleSubmit}>
        <PasswordInput
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
        />
        <Button disabled={loading} value="Register" />
      </Form>
    </div>
  );
}

Register.propTypes = {
  setUser: PropTypes.func,
};

export default Register;
