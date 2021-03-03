import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import './Register.scss';
import { useAuth } from '../../contexts/AuthContext';
import Alert from '../../components/Alert/Alert';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

function Register() {
  const { register } = useAuth();
  const [error, setError] = useState('');
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
      setError('');
      setLoading(true);
      await register(email, password);
      history.push('/');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
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
