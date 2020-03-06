const adminFormInitialState = {
  inputValues: {
    title: "",
    date: "",
    startingTime: "",
    endingTime: "",
    venue: "",
    description: "",
    programmeImage: "",
    videoUrl: "",
    isIdRequired: false
  },
  inputValidities: {
    title: false,
    date: false,
    startingTime: false,
    endingTime: true,
    venue: false,
    description: true,
    programmeImage: true,
    videoUrl: true,
    isIdRequired: true
  },
  isFormValid: false
};

export default adminFormInitialState;;