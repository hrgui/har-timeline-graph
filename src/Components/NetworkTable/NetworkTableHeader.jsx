import React from "react";
import classNames from "classnames/bind";
const Styles = {};

const context = classNames.bind(Styles);

const NetworkTableHeader = () => (
  <thead className={Styles.thead}>
    <tr>
      <th className={Styles["timeline-header"]}>Waterfall</th>
    </tr>
  </thead>
);

export default NetworkTableHeader;
