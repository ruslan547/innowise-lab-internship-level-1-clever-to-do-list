import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Form from '../UI/Form/Form';
import './Signin.scss';
import Button from '../UI/Button/Button';

function Signin() {
  const handleSubmit = ({ email, password }, event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="signin">
      <Link className="signin__link" to="/register">
        Register
      </Link>
      <Form onSubmit={handleSubmit}>
        <Button value="Sing in" />
      </Form>
    </div>
  );
}

export default Signin;
