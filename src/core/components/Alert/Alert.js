import './Alert.scss';
import PropTypes from 'prop-types';
import React from 'react';

function Alert({ value }) {
  if (value) {
    return <div className="alert">{value}</div>;
  }

  return null;
}

Alert.propTypes = {
  value: PropTypes.string,
};

export default React.memo(Alert);
