import './Actions.scss';
import PropTypes from 'prop-types';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';

function Actions({ onClick }) {
  const { action } = useApp();
  return (
    <div className="actions">
      <button className="delete-btn btn" type="button" name="delete" onClick={onClick}>
        Delete
      </button>
      <button className="save-btn btn" type="button" name={action} onClick={onClick}>
        {action}
      </button>
    </div>
  );
}

Actions.propTypes = {
  onClick: PropTypes.func,
};

export default Actions;
