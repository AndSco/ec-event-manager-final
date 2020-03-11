import React from "react";
import RegistrationContext from "./RegistrationContext";
import {
  fetchAllEvents,
  fetchEventById,
  deleteEventFromDB
} from "../../dbFunctions/handlers/events";
import { checkIfUserIsSelectedOrNot } from "../../utils/functions";
import Modal from "../../components/UIcomponents/Modal";
import {
  updateParticipantRegistrationOnDB, 
  removeParticipantFromDB, 
  updateParticipantsInBulkOnDb
} from "../../dbFunctions/handlers/participants";


const Context = props => {
  //Participant side
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [isRegistrationOver, setIsRegistrationOver] = React.useState(false);
  const [isRegistrationButtonHidden, setIsRegistrationButtonHidden] = React.useState(false);

  const openRegistrationForm = () => {
    setIsRegistering(true);
  }

  const closeRegistrationForm = () => {
    setIsRegistering(false);
  };

  const finishRegistrationProcess = () => {
    setIsRegistrationOver(true);
  }

  const backToEventPageAndHideButton = () => {
    setIsRegistrationOver(false);
    setIsRegistering(false);
    setIsRegistrationButtonHidden(true);
  }

  //Admin side
  const [allEvents, setAllEvents] = React.useState(undefined);
  const [isCreatingEvent, setIsCreatingEvent] = React.useState(false);
  const [isEditingEvent, setIsEditingEvent] = React.useState(false);
  const [eventCurrentlyEditing, setEventCurrentlyEditing] = React.useState(undefined);

  const isAdminInLocalStorage = localStorage.getItem("isAdminLoggedIn");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = React.useState(isAdminInLocalStorage);
  
  const logInAdmin = () => {
    setIsAdminLoggedIn(true);
    localStorage.setItem("isAdminLoggedIn", "true");
  }; 
  
  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn");
    window.location = "/";
  }


  //Event creation
  const startCreatingEvent = () => {
    setIsCreatingEvent(true);
  };

  const finishedCreatingEvent = () => {
    setIsCreatingEvent(false);
  }

  //Event editing
  const startEditingEvent = eventObject => {
    setEventCurrentlyEditing(eventObject);
    setIsEditingEvent(true);
  };

  const finishedEditingEvent = () => {
    setIsEditingEvent(false);
    setEventCurrentlyEditing(null);
  };

  // Event deleting 
  const [idOfEventToDelete, setIdOfEventToDelete] = React.useState(null);
  
  const prepareEventToBeDeleted = eventId => {
    setIdOfEventToDelete(eventId);
  }

  const deleteEventAndReload = async () => {
    await deleteEventFromDB(idOfEventToDelete);
    uploadAllEvents();
  };



  // PREPARE ALL EVENTS FROM DB
  const uploadAllEvents = React.useCallback(async () => {
    const allEventsfromDB = await fetchAllEvents();
    setAllEvents(allEventsfromDB)
  }, []);

  React.useEffect(() => {
    uploadAllEvents();
  }, [uploadAllEvents])

  
  // Useful for both sides
  const [currentEvent, setCurrentEvent] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);


  const loadEventOnPage = React.useCallback(async (eventId) => {
    try {
      setIsLoading(true);
      const eventToUpload = await fetchEventById(eventId);
      setCurrentEvent(eventToUpload);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  }, []);


  //MODAL
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [actionType, setActionType] = React.useState(null);
  const [selectedParticipantId, setSelectedParticipantId] = React.useState(null);

  const specifyParticipantId = (id) => {
    setSelectedParticipantId(id);
  }


  const manageModal = (purpose, participant, isBatchEmail) => {
    if (isBatchEmail) {
      if (purpose === "accept") {
        setActionType("batchAccept");
        setModalMessage(
          `Did you send the confirmation email to the selected ${participant.length} participants?`
        );
        openModal();
      }
      if (purpose === "reject") {
        setActionType("batchReject");
        setModalMessage(
          `Did you send the rejection email to the selected ${participant.length} participants?`
        );
        openModal();
      }
      
    } else {
      if (purpose === "accept") {
        setActionType("accept");
        setModalMessage(
          `Did you send the confirmation email to ${participant.firstName} ${participant.secondName}?`
        );
        openModal();
      }
      if (purpose === "reject") {
        setActionType("reject");
        setModalMessage(
          `Did you send the rejection email to ${participant.firstName} ${participant.secondName}?`
        );
        openModal();
      }
      if (purpose === "delete") {
        setActionType("delete");
        setModalMessage(
          `Sure you want to delete ${participant.firstName} ${participant.secondName}?`
        );
        openModal();
      }

      if (purpose === "deleteEvent") {
        setActionType("deleteEvent");
        setModalMessage(
          `Sure you want to delete ${participant.title}?`
        );
        openModal();
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }


  // Multiple selection
  const [isSelectAllActive, setIsSelectAllActive] = React.useState(false);
  const [isDeselectAllActive, setIsDeselectAllActive] = React.useState(false);
  const [selectedParticipants, setSelectedParticipants] = React.useState([]);
  // React.useEffect(() => console.log(selectedParticipants), [
  //   selectedParticipants
  // ]);

  const selectAll = () => {
    setIsSelectAllActive(true);
  }
  
  const deselectAll = () => {
    setIsSelectAllActive(false);
    setIsDeselectAllActive(true);
    setSelectedParticipants([]);
  }

  const resetSwitch = (switchType) => {
    if (switchType === "selectAll") {
      setIsSelectAllActive(false);
    }
    if (switchType === "deselectAll") {
      setIsDeselectAllActive(false);
    }
    return;
  }

  const onUserSelectionHandler = (userObj) => {
    setSelectedParticipants(checkIfUserIsSelectedOrNot(userObj, selectedParticipants));
  }


  const pushInBlock = (participantsArray) => {
    setSelectedParticipants(participantsArray);
  }

  //LOADING
  const startLoading = () => {
    setIsLoading(true);
  }

  const stopLoading = () => {
    setIsLoading(false);
  }

  
  
  return (
    <RegistrationContext.Provider
      value={{
        //Registration
        isRegistering,
        openRegistrationForm,
        closeRegistrationForm,
        isRegistrationOver,
        finishRegistrationProcess,
        backToEventPageAndHideButton,
        isRegistrationButtonHidden,
        //Admin view in nav
        isAdminLoggedIn,
        logInAdmin,
        logoutAdmin,
        //List of events
        allEvents,
        uploadAllEvents,
        //Event Creation
        isCreatingEvent,
        startCreatingEvent,
        finishedCreatingEvent,
        //Event Editing
        isEditingEvent,
        startEditingEvent,
        finishedEditingEvent,
        eventCurrentlyEditing,
        //Event deletion
        prepareEventToBeDeleted,
        //
        currentEvent,
        isLoading,
        loadEventOnPage,
        //MODAL
        isModalOpen,
        openModal,
        closeModal,
        manageModal,
        modalMessage,
        actionType,
        specifyParticipantId, 
        //MULTIPLE CHOICE
        selectedParticipants,
        isSelectAllActive,
        isDeselectAllActive,
        onUserSelectionHandler,
        pushInBlock,
        selectAll,
        deselectAll,
        resetSwitch,
        //LOADING
        startLoading,
        stopLoading
      }}
    >
      {props.children}

      {isModalOpen && (
        <Modal message={modalMessage}>
          <div style={{ display: "flex", margin: 8 }}>
            <h4
              className="modal-confirmation-button"
              style={{ padding: 15 }}
              onClick={async () => {         
                if (actionType === "accept" || actionType === "reject") {
                  await updateParticipantRegistrationOnDB(
                    selectedParticipantId,
                    actionType
                  );
                }
                if (actionType === "delete") {
                  await removeParticipantFromDB(selectedParticipantId);
                }
                if (actionType.includes("batch")) {
                  console.log("selected participants", selectedParticipants);
                  const participantsIds = selectedParticipants.map(participant => participant._id);
                  if (actionType === "batchAccept") {
                    await updateParticipantsInBulkOnDb(
                      participantsIds,
                      "accept"
                    );
                    deselectAll();
                  } else if (actionType === "batchReject") {
                    await updateParticipantsInBulkOnDb(
                      participantsIds,
                      "reject"
                    );
                    deselectAll();
                  } else if (actionType === "batchSpam") {
                    await updateParticipantsInBulkOnDb(
                      participantsIds,
                      "spam"
                    );
                  }
                }
                if (actionType === "deleteEvent") {
                  await deleteEventAndReload();
                  closeModal();
                  return;
                }
                
                closeModal();
                loadEventOnPage(currentEvent._id);
              }}
            >
              YES
            </h4>
            <h4
              className="modal-confirmation-button"
              style={{ padding: 15 }}
              onClick={closeModal}
            >
              NO
            </h4>
          </div>
        </Modal>
      )}
    </RegistrationContext.Provider>
  );  
}

export default Context;


