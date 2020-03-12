import axios from "axios";

export const sendParticipantToDB = async (participantObj, eventId) => {
  try {
    await axios.post(`/api/participants/${eventId}`, participantObj);
  } catch(err) {
    throw err;
  }
}


export const updateParticipantRegistrationOnDB = async (participantId, action) => {
  try {
    await axios.patch(`/api/participants/${participantId}`, {
      actionToPerform: action
    });
  } catch(err) {
    throw err;
  }
}

export const updateParticipantsInBulkOnDb = async (idsArray, action) => {
  try {
    await axios.put("api/participants/bulkUpdate", {
      actionToPerform: action, 
      participantsIds: idsArray
    });
  } catch(err) {
    throw err;
  }
}


export const removeParticipantFromDB = async (participantId) => {
  try {
    await axios.delete(`/api/participants/${participantId}`);
  } catch(err) {
    throw err;
  }
}