import React from "react";
import PropTypes from "prop-types";

const ErrorFilter = ({ isError, onChange }) => {
  const handleChange = () => {
    onChange(!isError);
  };

  return (
    <div class="flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        checked={isError}
        onChange={handleChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Errors Only
      </label>
    </div>
  );
};

ErrorFilter.propTypes = {
  isError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ErrorFilter;
