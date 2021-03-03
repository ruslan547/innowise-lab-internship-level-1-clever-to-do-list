import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import 'firebase/auth';
import Form from '../../components/Form/Form';
import Alert from '../../components/Alert/Alert';
import './Signin.scss';
import Button from '../../components/Button/Button';
import { signin } from '../../services/firebaseService';
import routeConstants from '../../shared/constants/routeConstants';

const { TASKER } = routeConstants;

function Signin() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async ({ email, password }, event) => {
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

Signin.propTypes = {
  setCurrentUser: PropTypes.func,
  setTasks: PropTypes.func,
};

export default Signin;
