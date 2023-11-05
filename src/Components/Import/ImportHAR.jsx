import React from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { useNetwork } from "./../../state/network/Context";

const DROP_FILE_CONFIG = {
  accept: ".har",
  multiple: false,
};

const ImportHar = ({ showButton, className }) => {
  const { actions } = useNetwork();
  const { updateErrorMessage } = actions;

  const prepareData = (newNetworkData) =>
    actions.updateData({
      entries: newNetworkData.log.entries,
      pages: newNetworkData.log.pages,
    });

  const onDrop = (files) => {
    const reader = new FileReader();
    reader.onabort = () => updateErrorMessage({ title: "file reading was aborted" });
    reader.onerror = () => updateErrorMessage({ title: "file reading has failed" });
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        prepareData(data);
      } catch (error) {
        updateErrorMessage({ title: "Error while parsing HAR file" });
      }
    };
    reader.readAsText(files[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    ...DROP_FILE_CONFIG,
    onDrop,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {showButton ? (
        <button
          className={
            "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          }
        >
          Import HAR
        </button>
      ) : (
        <p
          className={
            "items-center rounded text-[#7f8892] cursor-pointer flex text-lg h-full justify-center min-h-[300px] m-4 border-2 border-dashed border-[#ccc]"
          }
        >
          Drag and drop HAR file here, or click to select file
        </p>
      )}
    </div>
  );
};

ImportHar.propTypes = {
  className: PropTypes.string,
  showButton: PropTypes.bool,
};

ImportHar.defaultProps = {
  className: null,
  showButton: true,
};

export default ImportHar;
