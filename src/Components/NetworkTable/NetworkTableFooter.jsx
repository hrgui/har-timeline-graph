import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { formatSize, formatTime } from "./../../utils";

const NetworkTableFooter = ({ dataSummary, showAllInfo }) => (
  <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800 fixed bottom-0 w-full flex gap-4">
    {showAllInfo ? (
      <>
        <span className="flex-auto inline-flex justify-center border-r-[#ccc] border-r border-solid">{`${dataSummary.get(
          "totalRequests"
        )} requests`}</span>
        <span className="flex-auto inline-flex justify-center border-r-[#ccc] border-r border-solid">{`${formatSize(
          dataSummary.get("totalTransferredSize")
        )} transferred`}</span>
        <span className="flex-auto inline-flex justify-center border-r-[#ccc] border-r border-solid">{`${formatSize(
          dataSummary.get("totalUncompressedSize")
        )} resources`}</span>
        <span className="flex-auto inline-flex justify-center border-r-[#ccc] border-r border-solid">{`Finished: ${formatTime(
          dataSummary.get("finish")
        )}`}</span>
        <span className="flex-auto inline-flex justify-center border-r-[#ccc] border-r border-solid">{`DOMContentLoaded: ${formatTime(
          dataSummary.get("timings").DOMContentLoaded
        )}`}</span>
        <span className="flex-auto inline-flex justify-center">
          {" "}
          {`Load: ${formatTime(dataSummary.get("timings").onLoad)}`}
        </span>
      </>
    ) : (
      <span className="flex-auto">{`${dataSummary.get("totalRequests")} requests`}</span>
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
