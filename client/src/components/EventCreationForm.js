import React from "react";
import Input from "./UIcomponents/Input";
import BottomButtons from "./UIcomponents/BottomButtons";
import { FORM_UPDATE } from "../dbFunctions/reducers/formReducer";
import SecondaryButton from "./UIcomponents/SecondaryButton";
import CustomButton from "./UIcomponents/CustomButton";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import SectionTitle from "./UIcomponents/SectionTitle";
import CardContent from "./UIcomponents/CardContent";
import { formReducer } from "../dbFunctions/reducers/formReducer";
import adminFormInitialState from "../dbFunctions/reducers/adminFormInitialState";
import inputsConfig from "../assets/adminInputs";
import { createEvent, editEvent } from "../dbFunctions/handlers/events";
import Card from "./UIcomponents/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UsefulLink from "./UIcomponents/UsefulLink";

const EventCreationForm = props => {
  const context = React.useContext(RegistrationContext);
  const {
    finishedCreatingEvent,
    eventCurrentlyEditing,
    finishedEditingEvent
  } = context;

  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    eventCurrentlyEditing ? eventCurrentlyEditing : adminFormInitialState
  );

  const isThereAProgrammeImage = formState.programmeImage !== undefined;

  const idRequirements = eventCurrentlyEditing && eventCurrentlyEditing.isIdRequired ? "yes" : "no";
  const [isIdRequired, setIsIdRequired] = React.useState(idRequirements);

  const organisationRequirements =
    eventCurrentlyEditing && eventCurrentlyEditing.isOrganisationRequired ? "yes" : "no";
  const [isOrganisationRequired, setIsOrganisationRequired] = React.useState(
    organisationRequirements
  );


  //UsefulLinks
  const alreadyLoadedLinks = eventCurrentlyEditing ? eventCurrentlyEditing.usefulLinks : [];
  const [usefulLinks, setUsefulLinks] = React.useState(alreadyLoadedLinks);
  const [linkName, setLinkName] = React.useState("");
  const [url, setUrl] = React.useState("");

  const addLink = () => {
    if (linkName.length > 0 && url.length > 0) {
      setUsefulLinks([...usefulLinks, { linkName, url }]);
      setLinkName("");
      setUrl("");
    }
  }

  const removeLink = linkUrl => {
    const updatedLinkList = usefulLinks.filter(link => link.url !== linkUrl);
    setUsefulLinks(updatedLinkList);
  }



  const handleInputChange = (identifier, value, isValid) => {
    dispatchFormState({
      type: FORM_UPDATE,
      identifier,
      value,
      isValid
    });
  };

  const removeProgramme = () => handleInputChange("programmeImage", {}, true);

  const handleSubmit = async e => {
    e.preventDefault();
    const configsObject = formState.inputValues || formState; //for id, organisation and links i editing mode, there is no inputValues (they are managed outside the reducer)
    
    //Add the ID and organisationRequired info!
    configsObject.isIdRequired = isIdRequired === "no" ? false : true;
    configsObject.isOrganisationRequired = isOrganisationRequired === "no" ? false : true;

    //Add the useful links
    configsObject.usefulLinks = usefulLinks;

    if (!eventCurrentlyEditing) {
      await createEvent(configsObject);
      finishedCreatingEvent();
    } else if (eventCurrentlyEditing) {
      await editEvent(eventCurrentlyEditing._id, configsObject);
      finishedEditingEvent();
    }
  };

  const handleOptionChange = (changeEvent, action) => {
    if (action === "id") {
      setIsIdRequired(changeEvent.target.value);
    }
    else if (action === "organisation") {
      setIsOrganisationRequired(changeEvent.target.value);
    }
    else if (action === "linkName") {
      setLinkName(changeEvent.target.value);
    }
    else if (action === "url") {
      setUrl(changeEvent.target.value);
    }
  };

  return (
    <div className="event-container">
      <Card>
        <CardContent>
          <div style={styles.header}>
            <SectionTitle
              title={
                eventCurrentlyEditing
                  ? `Edit ${eventCurrentlyEditing.title}`
                  : "Create a new event"
              }
              callToAction="Fill in the form below"
            />
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
                placeholder={input.placeholder}
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
                isEditInput={eventCurrentlyEditing ? true : false}
                isThereAProgrammeImage={isThereAProgrammeImage}
                removeProgramme={removeProgramme}
              />
            ))}

            <div id="id-card-checkbox" className="radio-box input-container">
              <p>Do participants need an ID card for this event?</p>
              <div style={{ display: "flex", marginTop: 0, marginBottom: 12 }}>
                <div className="radio-container">
                  <input
                    type="radio"
                    id="yes"
                    name="idCardNeeded"
                    value="yes"
                    checked={isIdRequired === "yes"}
                    onChange={e => handleOptionChange(e, "id")}
                  />
                  <label htmlFor="yes">Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    id="no"
                    name="idCardNeeded"
                    value="no"
                    checked={isIdRequired === "no"}
                    onChange={e => handleOptionChange(e, "id")}
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>

            <div id="event-type-checkbox" className="radio-box input-container">
              <p>
                Do you want participants to specify their organisation and
                designation?
              </p>
              <div style={{ display: "flex", marginTop: 0, marginBottom: 12 }}>
                <div className="radio-container">
                  <input
                    type="radio"
                    id="yes"
                    name="organisationRequired"
                    value="yes"
                    checked={isOrganisationRequired === "yes"}
                    onChange={e => handleOptionChange(e, "organisation")}
                  />
                  <label htmlFor="yes">Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    id="no"
                    name="organisationRequired"
                    value="no"
                    checked={isOrganisationRequired === "no"}
                    onChange={e => handleOptionChange(e, "organisation")}
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>

            <div id="useful-links" className="radio-box input-container">
              <p>Enter useful links, if any</p>

              <div
                style={{
                  display: "flex",
                  marginTop: 0,
                  marginBottom: 12,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1.6rem"
                }}
              >
                <div style={styles.otherInputswLabel}>
                  <label htmlFor="linkName" style={styles.label}>
                    Link description
                  </label>
                  <input
                    style={styles.otherInputs}
                    type="text"
                    name={"linkName"}
                    placeholder="Enter link description"
                    value={linkName}
                    onChange={e => handleOptionChange(e, "linkName")}
                  />
                </div>

                <div style={styles.otherInputswLabel}>
                  <label htmlFor="url" style={styles.label}>
                    Absolute URL
                  </label>
                  <input
                    style={styles.otherInputs}
                    type="text"
                    name="url"
                    placeholder="Enter link URL"
                    value={url}
                    onChange={e => handleOptionChange(e, "url")}
                  />
                </div>

                <FontAwesomeIcon
                  icon="plus-circle"
                  color="grey"
                  onClick={addLink}
                  size="lg"
                  style={{ cursor: "pointer", paddingRight: "2rem" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  visibility: usefulLinks.length === 0 ? "hidden" : "visible"
                }}
              >
                <h4>Links included:</h4>
                {usefulLinks.length > 0 &&
                  usefulLinks.map(link => (
                    <div key={link.url} style={{ padding: "0 1.1rem" }}>
                      <UsefulLink
                        linkName={link.linkName}
                        url={link.url}
                        isSmall={true}
                      />
                      <FontAwesomeIcon
                        icon="times-circle"
                        color="grey"
                        size="xs"
                        style={{ cursor: "pointer", paddingLeft: ".3rem" }}
                        onClick={() => removeLink(link.url)}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <BottomButtons>
              <SecondaryButton
                isBackButton={true}
                buttonName="Back"
                functionToPerform={() => {
                  finishedCreatingEvent();
                  finishedEditingEvent();
                }}
              />
              <CustomButton
                buttonName={eventCurrentlyEditing ? "EDIT" : "CREATE"}
                color="#13E3AB"
                isSubmitButton
              />
            </BottomButtons>
          </form>
        </CardContent>
      </Card>
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
  },
  otherInputswLabel: { 
    display: "flex", 
    flexDirection: "column", 
    // padding: ".6rem" 
  }, 
  otherInputs: {
    width: 250
  }
};

export default EventCreationForm;

