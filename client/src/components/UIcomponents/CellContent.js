import React from "react";

const CellContent = props => {
  return (
    <h4
      style={{ fontSize: 14 }}
      className={props.isImportant ? "table-main-cell" : ""}
    >
      {props.value}
    </h4>
  );
};

export default CellContent;