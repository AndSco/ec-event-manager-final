import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventSectionTitle from "./EventSectionTitle";


const ExpandingSection = props => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div style={{ margin: "50px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: isVisible ? 0 : "1px solid #D0D3D4",
          padding: "0 10px 15px 0",
          cursor: "pointer"
        }}
        onClick={() => setIsVisible(!isVisible)}
      >
        <EventSectionTitle title={props.title} />
        <FontAwesomeIcon
          icon="angle-down"
          style={{ marginLeft: 8 }}
          color="#D0D3D4"
        />
      </div>
      {isVisible && props.children}
    </div>
  );
}

export default ExpandingSection;