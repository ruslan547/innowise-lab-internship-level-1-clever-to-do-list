import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import Button from '../UI/Button/Button';
import Form from '../UI/Form/Form';
import './Register.scss';

function Register(props) {
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = ({ email, password }, event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const { user } = response;
        setUser(user);
        // history.push(`/tassker/${user.uid}`);
        history.push('/tassker');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="register">
      <Link className="register__link" to="/">
        <div className="register__arrow" />
        Sign in
      </Link>
      <Form onSubmit={handleSubmit}>
        <Button value="Register" />
      </Form>
    </div>
  );
}

Register.propTypes = {
  setUser: PropTypes.func,
  // history: PropTypes.object,
};

export default Register;
