import React from "react";
import PropTypes from "prop-types";

import NetworkProvider from "./state/network/NetworkProvider";
import MainContainer from "./Containers/MainContainer";
import ThemeProvider from "./state/theme/Context";

const NetworkViewer = ({
  file,
  data,
  fetchOptions,
  scrollTimeStamp,
  options,
  onRequestSelect,
  scrollRequestPosition,
  autoHighlightChange,
  onDataLoaded,
  onDataError,
  containerClassName,
}) => (
  <section className={"pb-20"}>
    <ThemeProvider options={options}>
      <NetworkProvider
        autoHighlightChange={autoHighlightChange}
        data={data}
        fetchOptions={fetchOptions}
        file={file}
        onDataError={onDataError}
        onDataLoaded={onDataLoaded}
        scrollRequestPosition={scrollRequestPosition}
        scrollTimeStamp={scrollTimeStamp}
      >
        <MainContainer onRequestSelect={onRequestSelect} />
      </NetworkProvider>
    </ThemeProvider>
  </section>
);

NetworkViewer.propTypes = {
  autoHighlightChange: PropTypes.bool,
  containerClassName: PropTypes.string,
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  onDataError: PropTypes.func,
  onDataLoaded: PropTypes.func,
  onRequestSelect: PropTypes.func,
  options: PropTypes.object,
  scrollRequestPosition: PropTypes.oneOf(["before", "after", "near"]),
  scrollTimeStamp: PropTypes.number,
};

NetworkViewer.defaultProps = {
  autoHighlightChange: false,
  containerClassName: null,
  data: null,
  fetchOptions: { withCredentials: true },
  file: null,
  onDataError: null,
  onDataLoaded: null,
  onRequestSelect: () => {},
  options: null,
  scrollRequestPosition: "near",
  scrollTimeStamp: null,
};

export default NetworkViewer;
