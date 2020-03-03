import React from "react";

const ParticipantsCount = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 14px", 
        cursor: "pointer"
      }}
      onClick={props.functionToPerform}
    >
      <h4
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          color: props.isActive ? "#FF006C" : "#797D7F",
          transform: `scale(${props.isActive ? 1.2 : 1})`
        }}
      >
        {props.label}
      </h4>
      <h3 style={{ 
        color: props.isActive ? "#FF006C" : "#797D7F" ,
        transform: `scale(${props.isActive ? 1.2 : 1})`
      }}>
        {props.value}
      </h3>
    </div>
  );
}

export default ParticipantsCount;