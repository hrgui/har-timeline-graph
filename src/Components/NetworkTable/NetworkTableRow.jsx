import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { ROW_ID_PREFIX } from "./../../constants";
import TimeChart from "./TimeChart";
import { getStatusClass } from "../../utils";

const NetworkTableRow = ({ payload, maxTime, scrollHighlight, onSelect }) => {
  const handleSelectRequest = () => {
    onSelect(payload);
  };

  const rowProps = {
    className: classNames(getStatusClass(payload), {
      highlight: scrollHighlight,
    }),
    id: ROW_ID_PREFIX + payload.index,
    onClick: handleSelectRequest,
  };

  if (!payload.time) {
    return null;
  }

  return (
    <tr {...rowProps}>
      <td>
        <TimeChart payload={payload} maxTime={maxTime} timings={payload.timings} />
      </td>
    </tr>
  );
};

NetworkTableRow.propTypes = {
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  payload: PropTypes.object.isRequired,
  scrollHighlight: PropTypes.bool.isRequired,
};

export default NetworkTableRow;
