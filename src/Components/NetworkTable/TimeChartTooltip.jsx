import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { TIMINGS } from "../../constants";
import { prepareTooltipData } from "../../utils";

const DETAIL = [
  {
    title: "Resource Scheduling",
    category: ["queueing"],
  },
  {
    title: "Connection Start",
    category: ["blocked", "dns", "ssl", "connect"],
  },
  {
    title: "Request/Response",
    category: ["send", "wait", "receive"],
  },
];

const TimeChartTooltip = ({ data }) => {
  const tooltipData = useMemo(() => (!data ? null : prepareTooltipData(data)), [data]);

  if (!tooltipData) {
    return null;
  }

  return (
    <div className={"block w-[300px] h-auto bg-gray-600 border-2 p-4 opacity:1"}>
      <section className={"mb-2"}>
        <p className={"m-0"}>{`Queued at ${tooltipData.queuedAt}`}</p>
        <p className={"m-0"}>{`Started at ${tooltipData.startedAt}`}</p>
      </section>
      {DETAIL.map(({ title, category }) => (
        <section key={title} className={"mb-2"}>
          <table className={"b-0 w-full"}>
            <thead>
              <tr>
                <th>{title}</th>
                <th>DURATION</th>
              </tr>
            </thead>
            <tbody>
              {category.map((key) => (
                <tr key={key}>
                  <td>{TIMINGS[key].name}</td>
                  <td>
                    {Array.isArray(TIMINGS[key].dataKey)
                      ? tooltipData[TIMINGS[key].dataKey.find((key) => tooltipData[key])]
                      : tooltipData[TIMINGS[key].dataKey]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
      <section>
        <p>{`Total time ${tooltipData.totalTime}`}</p>
      </section>
    </div>
  );
};

TimeChartTooltip.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TimeChartTooltip;
