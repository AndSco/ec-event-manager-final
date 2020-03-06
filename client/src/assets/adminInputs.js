const adminInputs = [
  {
    identifier: "title",
    name: "Event Title",
    isCompulsory: true,
    isLong: false,
    placeholder: "Enter the event title",
    validationNeeded: "required"
  },
  {
    identifier: "date",
    name: "Date",
    isCompulsory: true,
    isLong: false,
    validationNeeded: "required",
    isDateInput: true
  },
  {
    identifier: "startingTime",
    name: "Starting Time",
    isCompulsory: true,
    isLong: false,
    validationNeeded: "required",
    isTimeInput: true
  },
  {
    identifier: "endingTime",
    name: "Ending Time",
    isCompulsory: false,
    isLong: false,
    validationNeeded: "required",
    isTimeInput: true
  },
  {
    identifier: "venue",
    name: "Venue",
    placeholder: "Enter the event venue",
    isCompulsory: true,
    isLong: false,
    validationNeeded: "required"
  },
  {
    identifier: "description",
    name: "Event Description",
    placeholder: "Enter the event description",
    isCompulsory: true,
    isLong: true,
    isTextArea: true
  },
  {
    identifier: "programmeImage",
    name: "Programme image",
    isCompulsory: false,
    isLong: false,
    isFileInput: true
  },
  {
    identifier: "videoUrl",
    name: "Video URL",
    placeholder: "Enter relevant video (optional)",
    isCompulsory: false
  }
];

export const generateTableHeaders = eventObject => {
  const tableHeaders = [];
  tableHeaders.push({name: "Name"});
  if (eventObject.isOrganisationRequired) {
    tableHeaders.push({name: "Organisation"});
    tableHeaders.push({name: "Designation"});
  }
  if (eventObject.isIdRequired) {
    tableHeaders.push({name: "ID card"});
  }
  tableHeaders.push({name: "Email address"});
  tableHeaders.push({name: "Mobile"});
  tableHeaders.push({name: "Status"});
  tableHeaders.push({name: ""});  
  
  return tableHeaders;
}

export default adminInputs;