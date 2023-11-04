import React from "react";
import PropTypes from "prop-types";

const Reset = ({ className, onReset }) => {
  const handleURLReset = () => {
    window.history.pushState({}, document.title, "/");
  };

  const handleReset = () => {
    handleURLReset();
    onReset();
  };

  return (
    <button
      className={
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      }
      onClick={handleReset}
    >
      Reset
    </button>
  );
};

Reset.propTypes = {
  className: PropTypes.string,
  onReset: PropTypes.func.isRequired,
};

Reset.defaultProps = {
  className: "",
};

export default Reset;
