import React from "react";
import Card from "./UIcomponents/Card";
import SecondaryButton from "./UIcomponents/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import AddToCalendarButton from "./AddToCalendarButton";

const ConfirmationMessage = props => {
  const context = React.useContext(RegistrationContext);
  const { backToEventPageAndHideButton } = context;

  return (
    <div className="confirmation-box-container">
      <div id="confirmation-box">
        <FontAwesomeIcon icon="check-circle" color="#13E3AB" size="4x" />
        <div style={{ margin: "20px 0 50px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>{`Thanks for registering...`} </h2>
          <h4 style={{ textAlign: "center" }}>
            You will receive a confirmation email soon!
          </h4>
          <AddToCalendarButton />
        </div>
        <SecondaryButton
          isBackButton={true}
          buttonName="Back"
          functionToPerform={backToEventPageAndHideButton}
        />
      </div>
    </div>
  );
}

export default ConfirmationMessage;