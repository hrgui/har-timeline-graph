import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { ROW_ID_PREFIX } from "./../../constants";
import TimeChart from "./TimeChart";
import { getStatusClass } from "../../utils";

const Styles = {};
const context = classNames.bind(Styles);

const NetworkTableRow = ({ payload, maxTime, scrollHighlight, onSelect }) => {
  const handleSelectRequest = () => {
    onSelect(payload);
  };

  const rowProps = {
    className: context("network-table-row", getStatusClass(payload), {
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
      <td className={Styles["timeline-header"]}>
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
