import React from "react";
import PropTypes from "prop-types";

const Styles = {};

const Request = ({ data }) => (
  <div className={Styles["header-detail"]}>
    {data.headers.request.map(({ name, value }, index) => (
      <p key={`${name}-${index}`} className={Styles["info-row"]}>
        <span className={Styles["info-caption"]}>{`${name}:`}</span>
        <span className={Styles["info-value"]}>{value}</span>
      </p>
    ))}
  </div>
);

Request.propTypes = {
  data: PropTypes.object,
};

Request.defaultProps = {
  data: null,
};

export default Request;
