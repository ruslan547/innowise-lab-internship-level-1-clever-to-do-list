import './Actions.scss';
import PropTypes from 'prop-types';

function Actions({ action, onClick }) {
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
  action: PropTypes.string,
  onClick: PropTypes.func,
};

export default Actions;
