import React from "react";
import PropTypes from "prop-types";

const Styles = {};

const Search = ({ name, value, onChange }) => {
  const handleInputChange = ({ target }) => {
    onChange({
      name,
      value: target.value,
    });
  };

  return (
    <div>
      <input
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleInputChange}
        placeholder="Filter"
        type="text"
        value={value}
      />
    </div>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Search.defaultProps = {
  value: "",
};

export default Search;
