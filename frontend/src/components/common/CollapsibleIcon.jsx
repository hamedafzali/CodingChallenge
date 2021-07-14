import React from "react";

const CollapsibleIcon = ({ index }) => {
  return (
    <div
      data-toggle="collapse"
      data-target={`#collapse${index}`}
      style={{ cursor: "pointer" }}
    >
      &#x27A4;
    </div>
  );
};

export default CollapsibleIcon;
