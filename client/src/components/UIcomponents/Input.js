import React from "react";
import { inputValidator } from "../../dbFunctions/reducers/formReducer";
import { uploadEventProgramme, deleteEventProgramme } from "../../dbFunctions/handlers/events";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = props => {
  const context = React.useContext(RegistrationContext);
  const { eventCurrentlyEditing } = context;

  const value = props.isEditInput
    ? eventCurrentlyEditing[props.identifier]
    : "";
  const [inputValue, setInputValue] = React.useState(value);

  const validationConfigs = {
    type: props.validationNeeded,
    minLength: props.min,
    text: inputValue
  };

  const [inputValidity, setInputValidity] = React.useState(
    inputValidator(validationConfigs)
  );

  const updateInput = () => {
    props.onInputChange(props.identifier, inputValue, inputValidity);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
    setInputValidity(inputValidator(validationConfigs));
  };

  const handleFileChange = async e => {
    try {
      const programme = e.target.files[0];
      const fd = new FormData();
      fd.append("file", programme, programme.name);
      const programmeData = await uploadEventProgramme(fd);
      setInputValue(programmeData);
      props.onInputChange("programmeImage", programmeData, true);
    } catch (err) {
      throw err;
    }
  };

  const deleteStaleProgramme = async () => {
    if (eventCurrentlyEditing && eventCurrentlyEditing.programmeImage) {
      await deleteEventProgramme(
        eventCurrentlyEditing.programmeImage.public_id
      );
    }
    return;
  }

  let inputToRender = (
    <input
      type="text"
      placeholder={props.placeholder}
      name={props.inputName}
      // style={{ width: "100%" }}
      value={inputValue}
      onChange={e => handleChange(e)}
      onBlur={updateInput}
      required={props.isCompulsory}
    />
  );

  if (props.isDateInput) {
    inputToRender = (
      <input
        type="date"
        id={props.identifier}
        name={props.inputName}
        value={eventCurrentlyEditing ? inputValue.slice(0, 10) : inputValue}
        onChange={e => handleChange(e)}
        onBlur={updateInput}
        required={props.isCompulsory}
      />
    );
  }

  if (props.isTimeInput) {
    inputToRender = (
      <input
        type="time"
        id={props.identifier}
        value={inputValue}
        name="time"
        required={props.isCompulsory}
        onChange={e => handleChange(e)}
        onBlur={updateInput}
      />
    );
  }

  if (props.isEmailInput) {
    inputToRender = (
      <input
        type="email"
        id={props.identifier}
        value={inputValue}
        name="email"
        required={props.isCompulsory}
        onChange={e => handleChange(e)}
        onBlur={updateInput}
        placeholder={props.placeholder}
      />
    );
  }

  if (props.isTextArea) {
    inputToRender = (
      <textarea
        placeholder={props.placeholder}
        name={props.inputName}
        style={{ width: "100%", border: "none" }}
        value={inputValue}
        onChange={e => handleChange(e)}
        onBlur={updateInput}
        rows={10}
        required={props.isCompulsory}
      />
    );
  }

  if (props.isFileInput) {
    inputToRender = !props.isThereAProgrammeImage ? (
      <input
        type="file"
        id={props.identifier}
        name="file"
        accept=".png, .jpg, .JPG, .PNG, .jpeg"
        onChange={e => handleFileChange(e)}
        required={props.isCompulsory}
        //delete old programme before uploading a new one
        onClick={deleteStaleProgramme}
      />
    ) : (
      <h4
        onClick={() => {
          deleteStaleProgramme();
          props.removeProgramme();
        }}
      >
        Remove or change current programme
        <FontAwesomeIcon
          icon="times-circle"
          color="grey"
          size="xs"
          style={{ cursor: "pointer", paddingLeft: ".3rem" }}
        />
      </h4>
    );
  }

  return (
    <div
      style={{ ...styles.inputContainer, width: props.isLong ? 600 : 270 }}
      className="input-container"
    >
      <label htmlFor={props.inputName} style={styles.label}>
        {props.inputName}
        {props.isCompulsory && <span style={{ color: "red" }}> *</span>}
      </label>

      {inputToRender}

      {/* {errorMessage && <h5 className="error-message">{errorMessage}</h5>} */}
    </div>
  );
};

const styles = {
  inputContainer: {
    // height: 40,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
    padding: "6px 10px",
    margin: 10
  },
  label: {
    // color: "red"
  }
};

export default Input;

