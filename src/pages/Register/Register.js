import { Link, useHistory } from 'react-router-dom';
import React, { useCallback, useState } from 'react';
import Button from '../../core/components/Button/Button';
import Form from '../../core/components/Form/Form';
import './Register.scss';
import Alert from '../../core/components/Alert/Alert';
import PasswordInput from './components/PasswordInput/PasswordInput';
import { register } from '../../core/services/firebaseService';
import routeConstants from '../../core/constants/routeConstants';

const { TASKER, SIGNIN } = routeConstants;

function Register() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ email, password }, event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      try {
        setError('');
        setLoading(true);
        await register(email, password);
        history.push(TASKER);
      } catch ({ message }) {
        setError(message);
        setLoading(false);
      }
    },
    [confirmPassword, history],
  );

  const handleChange = useCallback(({ target: { value } }) => setConfirmPassword(value), []);

  return (
    <div className="register">
      <div className="register__nav">
        <Link className="link" to={SIGNIN}>
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

export default Register;
