import axios from "axios";

export const sendParticipantToDB = async (participantObj, eventId) => {
  try {
    const response = await axios.post(`/api/participants/${eventId}`, participantObj);
    console.log(response.data);
  } catch(err) {
    throw err;
  }
}


export const updateParticipantRegistrationOnDB = async (participantId, action) => {
  try {
    const response = await axios.patch(`/api/participants/${participantId}`, {
      actionToPerform: action
    });
    console.log(response.data);
  } catch(err) {
    throw err;
  }
}

export const updateParticipantsInBulkOnDb = async (idsArray, action) => {
  try {
    console.log("IDS ARRAY", idsArray);
    console.log("action", action);
    const response = await axios.put("api/participants/bulkUpdate", {
      actionToPerform: action, 
      participantsIds: idsArray
    });
    console.log(response.data);
  } catch(err) {
    throw err;
  }
}


export const removeParticipantFromDB = async (participantId) => {
  try {
    const response = await axios.delete(`/api/participants/${participantId}`);
    console.log(response.data);
  } catch(err) {
    throw err;
  }
}