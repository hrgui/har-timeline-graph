import React from "react";
import PropTypes from "prop-types";

import NetworkTableHeader from "./../Components/NetworkTable/NetworkTableHeader";
import NetworkTableRow from "./../Components/NetworkTable/NetworkTableRow";
import { useNetwork } from "./../state/network/Context";
import ImportHar from "./../Components/Import/ImportHAR";
import ErrorMessage from "./../Components/ErrorMessage";
import { useTheme } from "../state/theme/Context";
import InputHAR from "../Components/Import/InputHAR";

const NetworkTableContainer = ({ onRequestSelect }) => {
  const { state, actions } = useNetwork();
  const { showImportHAR } = useTheme();
  const actualData = state.get("actualData");
  const data = state.get("data");
  const totalNetworkTime = state.get("totalNetworkTime");
  const error = state.get("error");
  const selectedReqIndex = state.get("selectedReqIndex");
  const showReqDetail = state.get("showReqDetail");
  const containerClassName = "";
  const handleReqSelect = (payload) => {
    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    onRequestSelect(payload);
  };

  if (error) {
    return <ErrorMessage {...error} />;
  }

  if (!actualData.size) {
    return (
      <section>
        {showImportHAR && (
          <>
            <ImportHar showButton={false} />
            <InputHAR />
          </>
        )}
      </section>
    );
  }

  return (
    <section className={containerClassName}>
      <table>
        <NetworkTableHeader />
        <tbody>
          {Array.from(data).map((rowInfo) => (
            <NetworkTableRow
              key={rowInfo.index}
              maxTime={totalNetworkTime}
              onSelect={handleReqSelect}
              payload={rowInfo}
              scrollHighlight={selectedReqIndex === rowInfo.index}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

NetworkTableContainer.propTypes = {
  onRequestSelect: PropTypes.func,
};

NetworkTableContainer.defaultProps = {
  onRequestSelect: () => {},
};

export default NetworkTableContainer;
