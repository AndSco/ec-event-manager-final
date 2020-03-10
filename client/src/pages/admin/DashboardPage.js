import React from "react";
import AdminEventList from "../../components/AdminEventList";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";
import EventEditing from "../../components/EventEditing";
import PasswordBox from "../../components/PasswordBox";
import CreateEventForm from "../../components/EventCreationForm";

const DashboardPage = () => {
  const context = React.useContext(RegistrationContext);
  const { isCreatingEvent, isEditingEvent, uploadAllEvents, isAdminLoggedIn } = context;


  React.useEffect(() => {
    uploadAllEvents();
  }, [uploadAllEvents, isCreatingEvent, isEditingEvent]);


  if (!isAdminLoggedIn) {
    return <PasswordBox />
  }

  return isCreatingEvent ? <CreateEventForm /> :  isEditingEvent ? <EventEditing /> : <AdminEventList />;
}

export default DashboardPage;