import { Link, useHistory } from 'react-router-dom';
import React, { useCallback, useState } from 'react';
import 'firebase/auth';
import Form from '../../core/components/Form/Form';
import Alert from '../../core/components/Alert/Alert';
import './Signin.scss';
import Button from '../../core/components/Button/Button';
import { signin } from '../../core/services/firebaseService';
import routeConstants from '../../core/constants/routeConstants';

const { TASKER } = routeConstants;

function Signin() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ email, password }, event) => {
      event.preventDefault();

      try {
        setError('');
        setLoading(true);
        await signin(email, password);
        history.push(TASKER);
      } catch ({ message }) {
        setError(message);
        setLoading(null);
      }
    },
    [history],
  );

  return (
    <div className="signin">
      <div className="signin__nav">
        <Link className="link" to="/register">
          Register
          <div className="signin__arrow arrow" />
        </Link>
      </div>

      <Alert value={error} />
      <Form onSubmit={handleSubmit}>
        <Button disabled={loading} value="Sing in" />
      </Form>
    </div>
  );
}

export default Signin;
