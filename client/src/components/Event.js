import React from "react";
import Card from "./UIcomponents/Card";
import EventDescription from "./UIcomponents/EventDescription";
import VideoPlayer from "./VideoPlayer";
import {stringifyDate} from "../utils/functions";
import EventHeader from "./EventHeader";
import CardContent from "./UIcomponents/CardContent";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import EventRegistrationForm from "./EventRegistrationForm";
import ProgrammeViewer from "./ProgrammeViewer";
import LinkSection from "./LinkSection";


const Event = props => {
  const context = React.useContext(RegistrationContext);
  const {isRegistering} = context;

  return (
    <div className="event-container">
      <Card>
        <EventHeader
          title={props.title}
          date={stringifyDate(props.date)}
          time={`${props.startingTime} - ${props.endingTime}`}
          venue={props.venue}
        />

        {isRegistering ? (
          <EventRegistrationForm />
        ) : (
          <CardContent>
            <EventDescription description={props.description} />
            {props.usefulLinks && props.usefulLinks.length > 0 && (
              <LinkSection links={props.usefulLinks} />
            )}
            {props.programmeImage && <ProgrammeViewer />}
            {props.videoUrl && <VideoPlayer videoUrl={props.videoUrl} />}
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default Event;