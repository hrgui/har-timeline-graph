import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ title, description }) => (
  <div>
    {title && <h4>{title}</h4>}
    {description && <p>{description}</p>}
  </div>
);

ErrorMessage.propTypes = {
  description: PropTypes.any,
  title: PropTypes.any,
};

ErrorMessage.defaultProps = {
  description: null,
  title: null,
};

export default ErrorMessage;
