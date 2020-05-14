const moment = require("moment");

const participationStatusDictionary = {
  pending: 1, 
  confirmed: 2, 
  rejected: 3, 
  spam: 4
}

const emailMessages = {
  createConfirmationMessage: (event, participant) =>
    `Dear ${
      participant.firstName
    },%0D%0A %0D%0A We are pleased to confirm your attendance to the event ${
      event.title
    }, to be held on ${formatDate(event.date)} at ${event.startingTime} at ${
      event.venue
    }. See you soon!`,
  createRejectionMessage: (event, participant) =>
    `Dear ${participant.firstName},%0D%0A %0D%0A We are sorry to inform you that your registration to ${event.title} has not been approved. We look forward to you joining us for future events.%0D%0A %0D%0A Kind regards,`,
  createReminderMessage: (event, participant) =>
    `Dear ${
      participant.firstName
    },%0D%0A %0D%0A This is to remind you that the event ${
      event.title
    } will soon happen! On ${formatDate(event.date)} at ${
      event.startingTime
    } at ${event.venue}.%0D%0A %0D%0A We look forward to seeing you soon!`
};

export const sendEmail = (purpose, participantsArray, currentEvent) => {
  if (participantsArray.length === 1) {
    const participant = participantsArray[0];
    if (purpose === "accept") {
      window.location.href = `mailto:${
        participant.email
      }?subject=Your Event Registration&body=${emailMessages.createConfirmationMessage(
        currentEvent,
        participant
      )}`;
    }
    if (purpose === "reject") {
      window.location.href = `mailto:${
        participant.email
      }?subject=Your Event Registration&body=${emailMessages.createRejectionMessage(
        currentEvent,
        participant
      )}`;
    }
    if (purpose === "remind") {
      window.location.href = `mailto:${
        participant.email
      }?subject=Your Event is coming up soon!&body=${emailMessages.createReminderMessage(
        currentEvent,
        participant
      )}`;
    }
  } else {
    const emailAddresses = participantsArray.map(entry => entry.email);
    if (purpose === "accept") {
      window.location.href = `mailto:?bcc=${[
        ...emailAddresses
      ]}&subject=Your Event Registration&body=Dear Sir/Madam,%0D%0A %0D%0A We are pleased to confirm your attendance to the event ${
        currentEvent.title
      }, to be held on ${formatDate(currentEvent.date)} at ${
        currentEvent.startingTime
      } at ${currentEvent.venue}. See you soon!`;
    }
    if (purpose === "reject") {
      window.location.href = `mailto:?bcc=${[
        ...emailAddresses
      ]}&subject=Your Event Registration&body=Dear Sir/Madam,%0D%0A %0D%0A We are sorry to inform you that your registration to ${
        currentEvent.title
      } has not been approved. We look forward to you joining us for future events.%0D%0A %0D%0A Kind regards,`;
    }
    if (purpose === "remind") {
      window.location.href = `mailto:?bcc=${[
        ...emailAddresses
      ]}&subject=Your Event is coming up soon!&body=Dear Sir/Madam,%0D%0A %0D%0A This is to remind you that the event ${
        currentEvent.title
      } will soon happen! On ${formatDate(currentEvent.date)} at ${
        currentEvent.startingTime
      } at ${
        currentEvent.venue
      }.%0D%0A %0D%0A We look forward to seeing you soon!`;
    }
  }
};
 

export const sortByStatus = (a, b) => {
  if (
    participationStatusDictionary[a.registrationStatus] >
    participationStatusDictionary[b.registrationStatus]
  ) {
    return 1;
  }
  if (
    participationStatusDictionary[a.registrationStatus] <
    participationStatusDictionary[b.registrationStatus]
  ) {
    return -1;
  }
  return 0;     
}


export const sortParticipantsBySomeValue = (value, array)  => {
  return array.sort((a, b) => {
    if (value === "registrationStatus") {
      return sortByStatus(a, b);
    } else {
      if (a[value].toLowerCase() > b[value].toLowerCase()) {
        return 1;
      }
      if (a[value].toLowerCase() < b[value].toLowerCase()) {
        return -1;
      }
      return 0;
    }   
  }
)}


export const getParticipantsByStatus = (eventObj, status) => {
  return eventObj.participantsRegistered.filter(
    participant => participant.registrationStatus === status
  );
}


export const sortEventsByDate = eventsArray => {
  return eventsArray.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;   
  })
}

export const checkIfUserIsSelectedOrNot = (userObj, stateArray) => {
  let newStateArray = [...stateArray];
  if (stateArray.length > 0 && stateArray.some(entry => entry._id === userObj._id)) {
    newStateArray = newStateArray.filter(entry => entry._id !== userObj._id);
  } else {
    newStateArray.push(userObj);
  }
  return newStateArray;
}


export const formatDate = dateString => {
  const year = dateString.slice(2, 4);
  const month = dateString.slice(5, 7);
  const day = dateString.slice(8, 10);

  return `${day}/${month}/${year}`;
}


export const addTimeToADate = (dateObj, startingTime) => {
  let actualDate = dateObj.split("T")[0];
  actualDate = actualDate.split("-");
  const hours = startingTime.split(":")[0];
  const minutes = startingTime.split(":")[1];
  const time = moment(new Date(actualDate));
  time.add(hours, "hours").add(minutes, "minutes"); 
  return time.format("YYYYMMDDTHHmmssZ"); 
}


export const stringifyDate = dateObj => {
  return moment(dateObj)
    .format("dddd D MMMM YYYY");
}
