import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Popover from "react-popover";

import { calcChartAttributes } from "./../../utils";
import { TIME_CHART_DEFAULT_PROPS, TIME_CHART_SVG_PROPS } from "./../../constants";
import TimeChartTooltip from "./TimeChartTooltip";

const TimeChart = ({ timings, payload, maxTime }) => {
  const chartAttributes = useMemo(() => calcChartAttributes(timings, maxTime), [timings, maxTime]);
  const [isOpen, updateOpen] = useState(false);
  const displayPopover = () => updateOpen(true);
  const hidePopover = () => updateOpen(false);

  const textXValue = chartAttributes[0].x;

  const url = new URL(payload.url);
  const pathname = url.pathname;

  return (
    <div>
      <Popover body={<TimeChartTooltip data={timings} />} isOpen={isOpen} preferPlace="below">
        <div style={{ position: "relative", height: "40px" }}>
          <div style={{ position: "absolute", left: textXValue, whiteSpace: "nowrap" }}>
            {payload.method} {pathname}
          </div>
          <div
            style={{ position: "absolute", left: textXValue, top: "20px", whiteSpace: "nowrap" }}
          >
            <small>{url.hostname}</small>
          </div>
        </div>
        <div onMouseOut={hidePopover} onMouseOver={displayPopover}>
          <svg {...TIME_CHART_SVG_PROPS}>
            <g>
              {chartAttributes.map((chartProps) => (
                <rect key={chartProps.key} {...chartProps} {...TIME_CHART_DEFAULT_PROPS} />
              ))}
            </g>
          </svg>
        </div>
      </Popover>
    </div>
  );
};

TimeChart.propTypes = {
  maxTime: PropTypes.number.isRequired,
  payload: PropTypes.any.isRequired,
  timings: PropTypes.object.isRequired,
};

export default TimeChart;
