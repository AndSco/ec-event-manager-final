import React from "react";
import ExpandingSection from "./UIcomponents/ExpadingSection";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";

const ProgrammeViewer = props => {
  const context = React.useContext(RegistrationContext);
  const { currentEvent } = context;

  return (
    <div style={{ marginTop: 70 }}>
      <ExpandingSection title="Programme">
        <img
          src={currentEvent.programmeImage.programmeUrl}
          className="programme-image"
          alt="event programme"
        />
      </ExpandingSection>
    </div>
  );
}

export default ProgrammeViewer;
