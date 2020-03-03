const adminFormInitialState = {
  inputValues: {
    title: "",
    date: "",
    startingTime: "",
    endingTime: "",
    venue: "",
    description: "",
    pdfProgramme: "",
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
    pdfProgramme: true,
    videoUrl: true,
    isIdRequired: true
  },
  isFormValid: false
};

export default adminFormInitialState;;