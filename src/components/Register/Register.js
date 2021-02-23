import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Form from '../UI/Form/Form';
import './Register.scss';
import arrow from '../../img/arrow.svg';

function Register() {
  return (
    <div className="register">
      <Link className="register__link" to="/signin">
        <img src={arrow} alt="" />
        Sign in
      </Link>
      <Form onSubmit={console.log('on')}>
        <Button value="Register" />
      </Form>
    </div>
  );
}

export default Register;
