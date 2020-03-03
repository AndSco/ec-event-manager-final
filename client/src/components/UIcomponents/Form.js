import React from "react";
import Input from "./Input";
import BottomButtons from "./BottomButtons";
import { FORM_UPDATE } from "../../dbFunctions/reducers/formReducer";
import SecondaryButton from "./SecondaryButton";
import CustomButton from "./CustomButton";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";
import SectionTitle from "./SectionTitle";
import CardContent from "./CardContent";

const Form = props => {
  const [formState, dispatchFormState] = React.useReducer(
    props.formReducer,
    props.initialFormState
  );

  const context = React.useContext(RegistrationContext);

  const handleInputChange = (identifier, value, isValid) => {
    dispatchFormState({
      type: FORM_UPDATE,
      identifier,
      value,
      isValid
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("To submit", formState);
    const configsObject = formState.inputValues;
    props.onFormSubmit && props.onFormSubmit(configsObject);
  };


  return (
    <CardContent>
      <div style={styles.header}>
        <SectionTitle
          title={props.eventForm ? "Register now" : "Create a new event"}
          callToAction={props.eventForm ? "" : "Fill in the form below"}
        />
      </div>

      <form
        encType="multipart/form-data"
        style={styles.formContainer}
        onSubmit={handleSubmit}
      >
        {props.inputsConfig.map((input, index) => (
          <Input
            identifier={input.identifier}
            inputName={input.name}
            isCompulsory={input.isCompulsory || undefined}
            onInputChange={handleInputChange}
            validationNeeded={input.validationNeeded || undefined}
            min={input.min || undefined}
            isLong={input.isLong || undefined}
            key={index}
            isTextArea={input.isTextArea || undefined}
            isFileInput={input.isFileInput || undefined}
            isDateInput={input.isDateInput || undefined}
            isTimeInput={input.isTimeInput || undefined}
          />
        ))}

        {props.isAdminForm && (
          <div id="id-card-checkbox">
            <label htmlFor="isIdRequired">
              Participants need an ID card for this event
            </label>
            <input
              type="checkbox"
              id="isIdRequired"
              name="isIdRequired"
              value="yes"
            />
          </div>
        )}

        <BottomButtons>
          <SecondaryButton
            isBackButton={true}
            buttonName={props.secondaryButtonText}
            functionToPerform={context.closeRegistrationForm}
          />
          <CustomButton
            buttonName={props.successButtonText}
            color="#13E3AB"
            isSubmitButton
          />
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

export default Form;
