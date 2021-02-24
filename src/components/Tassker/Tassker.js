import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../UI/Button/Button';
import Calendar from './Calendar/Calendar';
import Alert from '../UI/Alert/Alert';
import './Tassker.scss';

function Tassker() {
  const [error, setError] = useState('');
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  console.log(currentUser);

  const handleSignout = async () => {
    setError('');

    try {
      await signout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  };

  return (
    <div className="tassker">
      <div className="header">
        Tassker
        <button className="signout" type="button" onClick={handleSignout}>
          Sign out
        </button>
      </div>
      {error ? <Alert value={error} /> : null}
      <Calendar />
      <h2>title</h2>
      {/* <TaskList /> */}
      <Button />
    </div>
  );
}

export default Tassker;
