import React, { useState } from "react";
import PropTypes from "prop-types";
import CORSCheckbox from "./CORSCheckbox";

const URLInput = ({ onSubmit }) => {
  const [url, setURL] = useState("");
  const [isCORSEnabled, setCORS] = useState(false);
  const handleInputChange = ({ target }) => {
    setURL(target.value);
  };

  const handleSubmit = () => {
    onSubmit({
      file: url,
      isCORSEnabled,
    });
  };

  return (
    <div className="flex items-center gap-4 w-full max-w-5xl">
      <CORSCheckbox isEnabled={isCORSEnabled} onChange={setCORS} />
      <input
        className={
          "block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        onChange={handleInputChange}
        placeholder="HAR file URL"
        type="text"
        value={url}
      />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleSubmit}
      >
        GO
      </button>
    </div>
  );
};

URLInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default URLInput;
