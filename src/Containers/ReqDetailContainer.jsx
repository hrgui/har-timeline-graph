import React from "react";

import { useNetwork } from "./../state/network/Context";
import Tabs from "../Components/Common/Tabs";
import Tab from "../Components/Common/Tab";
import Headers from "./../Components/ReqDetail/Headers";
import IconCloseSign from "./../icons/IconCloseSign";
import Response from "../Components/ReqDetail/Response";

const ReqDetailContainer = () => {
  const { actions, state } = useNetwork();
  const reqDetail = state.get("reqDetail");
  const handleCloseClick = () => {
    actions.selectRequest(null);
  };

  return (
    <div>
      <button onClick={handleCloseClick} type="button">
        <IconCloseSign />
      </button>
      <Tabs defaultSelectedKey="headers">
        <Tab eventKey="headers" name="Headers">
          <Headers data={reqDetail} />
        </Tab>
        <Tab eventKey="response" name="Response">
          <Response data={reqDetail} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ReqDetailContainer;
