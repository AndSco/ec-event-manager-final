import React from "react";
import {sortParticipantsBySomeValue, sendEmail} from "../utils/functions";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import {updateParticipantsInBulkOnDb} from "../dbFunctions/handlers/participants";

const ActionSelector = props => {
  const { resortParticipants, visibleParticipants } = props;
  const context = React.useContext(RegistrationContext);

  const {
    selectedParticipants,
    currentEvent,
    manageModal,
    loadEventOnPage, 
    deselectAll
  } = context;

  const thereAreSelectedParticipants = selectedParticipants.length > 0;
  

  const handleChange = async (e, actionToPerform) => {
    if (actionToPerform === "sort") {
      resortParticipants(
        sortParticipantsBySomeValue(e.target.value, visibleParticipants)
      );
    }
    if (actionToPerform === "sendEmail") {
      //manage batch spam - No email is sent in this case
      if (e.target.value === "spam") {
        const participantsIds = selectedParticipants.map(participant => participant._id);
        await updateParticipantsInBulkOnDb(participantsIds, "spam");
        loadEventOnPage(currentEvent._id);
        deselectAll();
        return;
      }
      manageModal(e.target.value, selectedParticipants, true);
      sendEmail(e.target.value, selectedParticipants, currentEvent);
    }
  }

  return !thereAreSelectedParticipants ? (
    <select onChange={e => handleChange(e, "sort")} className="action-selector">
      <option value="">--ACTIONS--</option>
      <option value="secondName">Sort by name</option>
      <option value="organisation">Sort by organisation</option>
      <option value="registrationStatus">Sort by status</option>
    </select>
  ) : (
    <select
      onChange={e => handleChange(e, "sendEmail")}
      className="action-selector"
    >
      <option value="">--ACTIONS--</option>
      <option value="accept">Confirm</option>
      <option value="reject">Reject</option>
      <option value="spam">Mark as aspam</option>
      <option value="remind">Send reminder</option>
    </select>
  );
}


export default ActionSelector;