import React from 'react';
import PropTypes from 'prop-types';

import './Loading.styl';

const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className="loading-component">
      <div className="loader-container">
        <div className="tp-loader">
          <div className="ring"></div>
        </div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};
Loading.defaultProps = {
};

export default Loading;
