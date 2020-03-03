import React from "react";
import { formReducer } from "../dbFunctions/reducers/formReducer";
import initialFormState from "../dbFunctions/reducers/eventFormInitialState";
import { createStartingInputs } from "../assets/eventInputs";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import { sendParticipantToDB } from "../dbFunctions/handlers/participants";
import Input from "./UIcomponents/Input";
import BottomButtons from "./UIcomponents/BottomButtons";
import { FORM_UPDATE } from "../dbFunctions/reducers/formReducer";
import SecondaryButton from "./UIcomponents/SecondaryButton";
import CustomButton from "./UIcomponents/CustomButton";
import SectionTitle from "./UIcomponents/SectionTitle";
import CardContent from "./UIcomponents/CardContent";

const EventRegistrationForm = props => {
  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    initialFormState
  );

  const context = React.useContext(RegistrationContext);
  const {
    finishRegistrationProcess,
    currentEvent,
    closeRegistrationForm
  } = context;

  const inputsConfig = createStartingInputs(currentEvent);
  console.log("starting event input", createStartingInputs(currentEvent));

  const handleInputChange = (identifier, value, isValid) => {
    dispatchFormState({
      type: FORM_UPDATE,
      identifier,
      value,
      isValid
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("To submit", formState);
    const configsObject = formState.inputValues;
    finishRegistrationProcess();
    sendParticipantToDB(configsObject, currentEvent._id);
  };

  return (
    <CardContent>
      <div style={styles.header}>
        <SectionTitle title="Register now" />
      </div>

      <form
        encType="multipart/form-data"
        style={styles.formContainer}
        onSubmit={handleSubmit}
      >
        {inputsConfig.map((input, index) => (
          <Input
            identifier={input.identifier}
            inputName={input.name}
            isCompulsory={input.isCompulsory || undefined}
            placeholder={input.placeholder}
            onInputChange={handleInputChange}
            validationNeeded={input.validationNeeded || undefined}
            min={input.min || undefined}
            isLong={input.isLong || undefined}
            key={index}
            isEmailInput={input.isEmailInput || undefined}
            isTextArea={input.isTextArea || undefined}
            isFileInput={input.isFileInput || undefined}
            isDateInput={input.isDateInput || undefined}
            isTimeInput={input.isTimeInput || undefined}
          />
        ))}

        {/* <Input
          identifier="firstName"
          inputName="First Name"
          isCompulsory={true}
          onInputChange={handleInputChange}
        />

        <Input
          identifier="secondName"
          inputName="Second Name"
          isCompulsory={true}
          onInputChange={handleInputChange}
        />

        <Input
          identifier="mobile"
          inputName="Mobile number"
          onInputChange={handleInputChange}
        />

        {currentEvent.isIdRequired && (
          <Input
            identifier="idCard"
            inputName="ID Card number"
            isCompulsory={true}
            onInputChange={handleInputChange}
          />
        )}

        {currentEvent.isOrganisationRequired && (
          <Input
            identifier="organisation"
            inputName="Organisation"
            isCompulsory={true}
            onInputChange={handleInputChange}
          />
        )}

        {currentEvent.isOrganisationRequired && (
          <Input
            identifier="designation"
            inputName="Designation"
            isCompulsory={true}
            onInputChange={handleInputChange}
          />
        )}

        <Input
          identifier="email"
          inputName="Email address"
          isCompulsory={true}
          onInputChange={handleInputChange}
          isEmailInput={true}
        /> */}

        <BottomButtons>
          <SecondaryButton
            isBackButton={true}
            buttonName="Back"
            functionToPerform={closeRegistrationForm}
          />
          <CustomButton buttonName="SUBMIT" color="#13E3AB" isSubmitButton />
        </BottomButtons>
      </form>
    </CardContent>
  );
};

const styles = {
  header: {
    margin: "20px 0 30px 0",
    padding: "20px O"
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
};

export default EventRegistrationForm;
