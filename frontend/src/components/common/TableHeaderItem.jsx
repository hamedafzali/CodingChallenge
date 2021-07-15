import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
const TableHeaderItem = ({ path, data, handleClick }) => {
  if (!data) return "";
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-sm  dropdown-toggle dropdown-toggle-split p-0"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <div
          className="dropdown-item "
          href="#"
          onClick={() => handleClick("All data", path)}
        >
          All data
        </div>
        {data.map((i) => (
          <div
            key={i + path}
            className="dropdown-item "
            href="#"
            onClick={() => handleClick(i, path)}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableHeaderItem;
