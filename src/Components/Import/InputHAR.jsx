import React from "react";
import { stringify } from "qs";

const Styles = {};
import URLInput from "./URLInput";

const SAMPLE_HAR_URL =
  "https://raw.githubusercontent.com/saucelabs/network-viewer/main/examples/src/data/network.har";

const InputHAR = () => {
  const handleURLSubmit = (fetchInfo) => {
    const { origin, pathname } = document.location;
    const newURL = `${origin}${pathname}?${stringify(fetchInfo)}`;
    document.location.href = newURL;
  };

  return (
    <div className="flex flex-col items-center m-4">
      <h4 className="">OR add HAR file URL in the below input box</h4>
      <URLInput onSubmit={handleURLSubmit} />
      <p>
        <span>For Example use this har file: </span>
        <button
          className={"text-blue-300"}
          onClick={() => {
            handleURLSubmit({ file: SAMPLE_HAR_URL });
          }}
        >
          Load {SAMPLE_HAR_URL}
        </button>
      </p>
    </div>
  );
};

export default InputHAR;
