import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import 'firebase/auth';
import Form from '../UI/Form/Form';
import './Signin.scss';
import Button from '../UI/Button/Button';
import { useAuth } from '../../contexts/AuthContext';

function Signin() {
  const { signin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async ({ email, password }, event) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signin(email, password);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div className="signin">
      <Link className="signin__link" to="/register">
        Register
        <div className="signin__arrow" />
      </Link>
      {error ? <span>{error}</span> : null}
      <Form onSubmit={handleSubmit}>
        <Button disabled={loading} value="Sing in" />
      </Form>
    </div>
  );
}

export default Signin;
