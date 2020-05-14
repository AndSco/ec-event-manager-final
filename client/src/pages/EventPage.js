import React from "react";
import Event from "../components/Event";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import Loader from "../components/UIcomponents/Loader";
import ConfirmationMessage from "../components/ConfirmationMessage";


const EventPage = props => {
  const context = React.useContext(RegistrationContext);
  const {
    isRegistrationOver,
    currentEvent,
    isLoading,
    loadEventOnPage
  } = context; 
  const eventId = props.match.params.eventId;

  React.useEffect(() => {
    loadEventOnPage(eventId);
  }, [loadEventOnPage, eventId])

  return isLoading || !currentEvent ? (
    <Loader />
  ) : !isRegistrationOver ? (
    <Event
      eventId={eventId}
      title={currentEvent.title}
      date={currentEvent.date}
      description={currentEvent.description}
      startingTime={currentEvent.startingTime}
      endingTime={currentEvent.endingTime}
      venue={currentEvent.venue}
      videoUrl={currentEvent.videoUrl}
      logoOrganiser="https://scontent.fmla3-1.fna.fbcdn.net/v/t1.0-9/11951150_1176857798997798_586973355802380784_n.png?_nc_cat=106&_nc_ohc=08pkNCGfLNwAX9kgGX8&_nc_ht=scontent.fmla3-1.fna&oh=a3d2e41b2a8a7c26de937c6148d1ce26&oe=5E95E93C"
      programmeImage={currentEvent.programmeImage}
      usefulLinks={currentEvent.usefulLinks}
    />
  ) : (
    <ConfirmationMessage />
  );
};

export default EventPage;

