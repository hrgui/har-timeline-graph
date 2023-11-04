import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { formatSize, formatTime } from "./../../utils";

const Styles = {};
const context = classNames.bind(Styles);

const NetworkTableFooter = ({ dataSummary, showAllInfo }) => (
  <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800 fixed bottom-0 w-full flex gap-4">
    {showAllInfo ? (
      <>
        <span>{`${dataSummary.get("totalRequests")} requests`}</span>
        <span>{`${formatSize(dataSummary.get("totalTransferredSize"))} transferred`}</span>
        <span>{`${formatSize(dataSummary.get("totalUncompressedSize"))} resources`}</span>
        <span>{`Finished: ${formatTime(dataSummary.get("finish"))}`}</span>
        <span>{`DOMContentLoaded: ${formatTime(
          dataSummary.get("timings").DOMContentLoaded
        )}`}</span>
        <span>{`Load: ${formatTime(dataSummary.get("timings").onLoad)}`}</span>
      </>
    ) : (
      <span>{`${dataSummary.get("totalRequests")} requests`}</span>
    )}
  </div>
);

NetworkTableFooter.propTypes = {
  dataSummary: PropTypes.object.isRequired,
  showAllInfo: PropTypes.bool,
};

NetworkTableFooter.defaultProps = {
  showAllInfo: true,
};

export default NetworkTableFooter;
