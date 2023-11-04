import React, { useState } from "react";

import NetworkViewer from "./NetworkViewer";
import Footer from "./Components/Footer";
import { parseQueryString } from "./utils";
import "./index.css";

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [fileOptions, setFileOptions] = useState(null);
  const networkContainerClassName = "";

  // read file queryString and load HAR file
  useState(() => {
    const parsedData = parseQueryString();
    if (parsedData) {
      setFileOptions(parsedData);
    }
  }, []);

  return (
    <section>
      <div className={networkContainerClassName}>
        <NetworkViewer onDataLoaded={() => setIsDataLoaded(true)} {...fileOptions} />
      </div>
      {!isDataLoaded && (
        <div>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default App;
