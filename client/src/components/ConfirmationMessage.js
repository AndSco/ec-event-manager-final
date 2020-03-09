import React from "react";
import SecondaryButton from "./UIcomponents/SecondaryButton";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";

const ConfirmationMessage = () => {
  const context = React.useContext(RegistrationContext);
  const { backToEventPageAndHideButton } = context;

  return (
    <div className="confirmation-box-container">
      <div id="confirmation-box">
        {/* <FontAwesomeIcon icon="check-circle" color="#13E3AB" size="4x" /> */}
        <div
          id="confirmation-box-content"
          style={{
            margin: "20px 0 50px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>Thank you for registering!</h2>
          <h4 style={{ textAlign: "center" }}>
            We will confirm your attendance, or otherwise, as soon as possible.
          </h4>
          {/* <AddToCalendarButton /> */}
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