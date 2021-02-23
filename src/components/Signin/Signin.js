import { Link } from 'react-router-dom';
import SigninForm from './Form/Form';
import './Signin.scss';

function Signin() {
  return (
    <div className="signin">
      <Link className="link" to="/register">
        Register
      </Link>
      <SigninForm />
    </div>
  );
}

export default Signin;
