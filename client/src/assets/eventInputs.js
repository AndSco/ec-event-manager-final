export const createStartingInputs = eventObject => {
  const inputsToReturn = [];
  inputsToReturn.push({
    identifier: "firstName",
    name: "First Name",
    isCompulsory: true,
    validationNeeded: "minLength",
    placeholder: "Enter your first name",
    min: 3
  });

  inputsToReturn.push({
    identifier: "secondName",
    name: "Last Name",
    isCompulsory: true,
    validationNeeded: "minLength",
    placeholder: "Enter your last name",
    min: 3
  });

  inputsToReturn.push({
    identifier: "mobile",
    name: "Mobile number",
    placeholder: "Enter your mobile number (optional)"
  });

  if (eventObject.isIdRequired) {
    inputsToReturn.push({
      identifier: "idCardNumber",
      name: "ID Card number",
      placeholder: "Enter your ID card number",
      isCompulsory: true
    });
  }

  if (eventObject.isOrganisationRequired) {
    inputsToReturn.push({
      identifier: "organisation",
      name: "Organisation",
      isCompulsory: true,
      placeholder: "Enter the organisation you represent",
      validationNeeded: "required"
    });
    inputsToReturn.push({
      identifier: "designation",
      name: "Designation",
      isCompulsory: true,
      placeholder: "Enter your designation",
      validationNeeded: "required"
    });
  }
  inputsToReturn.push({
    identifier: "email",
    name: "Email address",
    isCompulsory: true,
    placeholder: "Enter your email address",
    validationNeeded: "email",
    isEmailInput: true
  });

  return inputsToReturn;
}

