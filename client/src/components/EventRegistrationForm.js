import React from "react";
import { formReducer, FORM_UPDATE } from "../dbFunctions/reducers/formReducer";
import initialFormState from "../dbFunctions/reducers/eventFormInitialState";
import { createStartingInputs } from "../assets/eventInputs";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import { sendParticipantToDB } from "../dbFunctions/handlers/participants";
import Input from "./UIcomponents/Input";
import BottomButtons from "./UIcomponents/BottomButtons";
import CustomButton from "./UIcomponents/CustomButton";
import CardContent from "./UIcomponents/CardContent";
import EventMinimalHeader from "./EventMinimalHeader";

const EventRegistrationForm = () => {
  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    initialFormState
  );

  const context = React.useContext(RegistrationContext);
  const {
    finishRegistrationProcess,
    currentEvent  } = context;

  const inputsConfig = createStartingInputs(currentEvent);

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
    const configsObject = formState.inputValues;
    finishRegistrationProcess();
    sendParticipantToDB(configsObject, currentEvent._id);
  };

  return (
    <div>
      <EventMinimalHeader />
      <CardContent>
        {/* <div style={styles.header}>
          <SectionTitle title="Register now" />
        </div> */}

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

          <BottomButtons isSingleButton={true}>
            <CustomButton
              buttonName="SUBMIT"
              color="#13E3AB"
              isSubmitButton
              largeButton={true}
            />
          </BottomButtons>
          {/* <BottomButtons isSingleButton={true}>
            <div id="disappearing-button">
              <SecondaryButton
                buttonName="Cancel and go back"
                functionToPerform={closeRegistrationForm}
                isBackButton={true}
              />
            </div>
          </BottomButtons> */}
        </form>
      </CardContent>
    </div>
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
