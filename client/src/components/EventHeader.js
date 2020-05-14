import React from "react";
import CustomButton from "./UIcomponents/CustomButton";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import IconLine from "./UIcomponents/IconLine";
import AfterRegistrationBox from "./AfterRegistrationBox";
import Logo from "./Logo";


const EventHeader = props => {
  const context = React.useContext(RegistrationContext);
  const {
    isRegistrationButtonHidden,
    isRegistering,
    closeRegistrationForm
  } = context;

  return (
    <div className="event-header" id={isRegistering ? "make-it-invisible" : ""}>
      <Logo />
      <div className="event-header-content">
        <h3 className="event-title">{props.title}</h3>
        <div className="bottom-details">
          <div className="details">
            {/* <h3 className="event-title">{props.title}</h3> */}
            <div className="event-info" style={{ margin: "20px 0" }}>
              <IconLine iconName="calendar-alt" details={props.date} />
              <IconLine iconName="clock" details={props.time} />
              <IconLine iconName="map-pin" details={props.venue} />
            </div>
          </div>
          {!isRegistrationButtonHidden ? (
            <CustomButton
              buttonName={!isRegistering ? "Register" : "Back to event"}
              functionToPerform={
                !isRegistering
                  ? context.openRegistrationForm
                  : closeRegistrationForm
              }
              color="#FF006C"
            />
          ) : (
            <AfterRegistrationBox />
          )}
        </div>
      </div>
    </div>
  );
}

export default EventHeader;