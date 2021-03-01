import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import 'firebase/auth';
import Form from '../UI/Form/Form';
import Alert from '../UI/Alert/Alert';
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
      history.push('/tasker');
    } catch (err) {
      setError(err.message);
      setLoading(null);
    }
  };

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
