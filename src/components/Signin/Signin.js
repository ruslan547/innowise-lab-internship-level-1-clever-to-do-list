import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'firebase/auth';
import Form from '../UI/Form/Form';
import Alert from '../UI/Alert/Alert';
import './Signin.scss';
import Button from '../UI/Button/Button';
import { useAuth } from '../../contexts/AuthContext';

function Signin() {
  const { signin } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  let cleanupFunction = false;

  const handleSubmit = async ({ email, password }, event) => {
    event.preventDefault();

    try {
      setError(null);
      setLoading(true);
      await signin(email, password);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }

    if (!cleanupFunction) {
      setLoading(null);
    }
  };

  useEffect(() => {
    return () => {
      cleanupFunction = true;
    };
  });

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
