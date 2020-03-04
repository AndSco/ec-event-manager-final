import React from "react";

const SectionTitle = props => {
  return (
    <h3 className="section-title">
      <i id="main-title">{props.title}</i> <span>{props.callToAction}</span>
    </h3>
  );
}

export default SectionTitle;

