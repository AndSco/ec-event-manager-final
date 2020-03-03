import React from "react"
import AddToCalendarButton from "./AddToCalendarButton";

const AfterRegistrationBox = props => {
  return (
    <div
      className="registration-button-substitute"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h4>Registration sent!</h4>
      {/* <h4 style={{ textTransform: "uppercase", color: "#D0D3D4" }}>
        We'll get in touch with you shortly
      </h4> */}
    </div>
  );
}

export default AfterRegistrationBox;