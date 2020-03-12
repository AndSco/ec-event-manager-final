import React from "react";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EventMinimalHeader = props => {
  const context = React.useContext(RegistrationContext);
  const { closeRegistrationForm, isRegistering } = context;

  return (
    <div className="minimal-header" id={isRegistering ? "make-it-visible" : ""}>
      <FontAwesomeIcon
        icon="angle-left"
        color="white"
        style={{ marginRight: ".6em", position: "absolute", "left": "20px" }}
        size="2x"
        onClick={closeRegistrationForm}
      />
      <p style={{ alignSelf: "center" }}>REGISTER NOW</p>
    </div>
  );
}

export default EventMinimalHeader;