const eventFormInitialState = {
  inputValues: {
    firstName: "",
    secondName: "",
    idCardNumber: "",
    mobile: "",
    designation: "",
    organisation: "",
    email: ""
  },
  inputValidities: {
    firstName: false,
    secondName: false,
    idCardNumber: true,
    mobile: true,
    designation: false,
    organisation: false,
    email: false
  },
  isFormValid: false
};

export default eventFormInitialState;