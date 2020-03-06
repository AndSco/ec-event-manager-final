import axios from "axios";

export const createEvent = async eventConfigObj => {
  try {
    const response = await axios.post("/api/events", eventConfigObj);
    const eventCreated = response.data;
    console.log("Created event:", eventCreated);
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
    const response = await axios.delete(`/api/events/${eventId}`);
    console.log(response.data);
  } catch(err) {
    throw err;
  }
}
 

export const editEvent = async eventId => {
  try {
    const response = await axios.patch(`/api/events/${eventId}`);
    console.log(response.data);
  } catch(err) {
    throw err;
  }
}


export const uploadEventProgramme = async (programmeFile) => {
  try {
    const response = await axios.post(`/api/events/programmeUpload`, programmeFile);
    const programmeData = response.data;
    console.log("RESPONSE I AM EXPECTING", programmeData);
    return programmeData;
  } catch (err) {
    throw err;
  }
};