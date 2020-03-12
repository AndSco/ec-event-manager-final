import axios from "axios";

export const createEvent = async eventConfigObj => {
  try {
    await axios.post("/api/events", eventConfigObj);
  } catch(err) {
    throw(err);
  }
}


export const fetchAllEvents = async () => {
  try {
    const response = await axios.get("/api/events");
    const data = await response.data;
    return data;
  } catch(err) {
    throw err;
  }
}


export const fetchEventById = async eventId => {
  try {
    const response = await axios.get(`/api/events/${eventId}`);
    const data = await response.data;
    return data;
  } catch(err) {
    throw(err);
  }
}


export const deleteEventFromDB = async eventId => {
  try {
    await axios.delete(`/api/events/${eventId}`);
  } catch(err) {
    throw err;
  }
}
 

export const editEvent = async (eventId, reqBody) => {
  try {
    await axios.patch(`/api/events/${eventId}`, reqBody);
  } catch(err) {
    throw err;
  }
}


export const uploadEventProgramme = async (programmeFile) => {
  try {
    const response = await axios.post(`/api/events/programmeUpload`, programmeFile);
    const programmeData = response.data;
    return programmeData;
  } catch (err) {
    throw err;
  }
};


export const deleteEventProgramme = async (public_id) => {
  try {
    await axios.delete(`/api/events/programmes/${public_id}`);
  } catch(err) {
    throw err;
  }
}