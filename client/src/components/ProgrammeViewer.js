import React from "react";
import ExpandingSection from "./UIcomponents/ExpadingSection";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";

const ProgrammeViewer = props => {
  const context = React.useContext(RegistrationContext);
  const { currentEvent } = context;
  const [isImageFullScreen, setIsImageFullScreen] = React.useState(false);

  console.log("evvv", currentEvent);

  return (
    <div style={{ marginTop: 70 }}>
      <ExpandingSection title="Programme">
        <img
          src={currentEvent.programmeImage.programmeUrl}
          className="programme-image"
          style={{ width: isImageFullScreen ? "90vw" : "" }}
          alt="event programme"
        />
        {/* <p onClick={() => {
          setIsImageFullScreen(!isImageFullScreen);
          }}>Expand</p> */}
      </ExpandingSection>
    </div>
  );
}

export default ProgrammeViewer;
