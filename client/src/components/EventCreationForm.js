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

  console.log("FORMSTATE", formState);

  const [isIdRequired, setIsIdRequired] = React.useState("no");
  const [isOrganisationRequired, setIsOrganisationRequired] = React.useState(
    "no"
  );

  const handleInputChange = (identifier, value, isValid) => {
    dispatchFormState({
      type: FORM_UPDATE,
      identifier,
      value,
      isValid
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const configsObject = formState.inputValues;
    //Add the ID info!
    configsObject.isIdRequired = isIdRequired === "no" ? false : true;
    configsObject.isOrganisationRequired =
      isOrganisationRequired === "no" ? false : true;
    console.log("Submiting", configsObject);
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
    if (action === "organisation") {
      setIsOrganisationRequired(changeEvent.target.value);
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
  }
};

export default EventCreationForm;


// import React from "react";
// import Input from "./UIcomponents/Input";
// import BottomButtons from "./UIcomponents/BottomButtons";
// import { FORM_UPDATE } from "../dbFunctions/reducers/formReducer";
// import SecondaryButton from "./UIcomponents/SecondaryButton";
// import CustomButton from "./UIcomponents/CustomButton";
// import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
// import SectionTitle from "./UIcomponents/SectionTitle";
// import CardContent from "./UIcomponents/CardContent";
// import { formReducer } from "../dbFunctions/reducers/formReducer";
// import adminFormInitialState from "../dbFunctions/reducers/adminFormInitialState";
// import inputsConfig from "../assets/adminInputs";
// import { createEvent } from "../dbFunctions/handlers/events";
// import Card from "./UIcomponents/Card";


// const EventCreationForm = props => {
//   const [formState, dispatchFormState] = React.useReducer(
//     formReducer,
//     adminFormInitialState
//   );

//   const [isIdRequired, setIsIdRequired] = React.useState("no");
//   const [isOrganisationRequired, setIsOrganisationRequired] = React.useState("no");

//   const context = React.useContext(RegistrationContext);
//   const { finishedCreatingEvent } = context;

//   const handleInputChange = (identifier, value, isValid) => {
//     dispatchFormState({
//       type: FORM_UPDATE,
//       identifier,
//       value,
//       isValid
//     });
//   };


//   const handleSubmit = async e => {
//     e.preventDefault();
//     const configsObject = formState.inputValues;
//     //Add the ID info!
//     configsObject.isIdRequired = isIdRequired === "no" ? false : true;
//     configsObject.isOrganisationRequired = isOrganisationRequired === "no" ? false : true;
//     console.log("Submiting", configsObject);
//     await createEvent(configsObject);
//     finishedCreatingEvent();
//   };

//   const handleOptionChange = (changeEvent, action) => {
//     if (action === "id") {
//       setIsIdRequired(changeEvent.target.value);
//     } 
//     if (action === "organisation") {
//       setIsOrganisationRequired(changeEvent.target.value);
//     }
//   }

//   return (
//     <div className="event-container">
//       <Card>
//         <CardContent>
//           <div style={styles.header}>
//             <SectionTitle
//               title="Create a new event"
//               callToAction="Fill in the form below"
//             />
//           </div>

//           <form
//             encType="multipart/form-data"
//             style={styles.formContainer}
//             onSubmit={handleSubmit}
//           >
//             {inputsConfig.map((input, index) => (
//               <Input
//                 identifier={input.identifier}
//                 inputName={input.name}
//                 placeholder={input.placeholder}
//                 isCompulsory={input.isCompulsory || undefined}
//                 onInputChange={handleInputChange}
//                 validationNeeded={input.validationNeeded || undefined}
//                 min={input.min || undefined}
//                 isLong={input.isLong || undefined}
//                 key={index}
//                 isTextArea={input.isTextArea || undefined}
//                 isFileInput={input.isFileInput || undefined}
//                 isDateInput={input.isDateInput || undefined}
//                 isTimeInput={input.isTimeInput || undefined}
//               />
//             ))}

//             <div id="id-card-checkbox" className="radio-box input-container">
//               <p>Do participants need an ID card for this event?</p>
//               <div style={{ display: "flex", marginTop: 0, marginBottom: 12 }}>
//                 <div className="radio-container">
//                   <input
//                     type="radio"
//                     id="yes"
//                     name="idCardNeeded"
//                     value="yes"
//                     checked={isIdRequired === "yes"}
//                     onChange={e => handleOptionChange(e, "id")}
//                   />
//                   <label htmlFor="yes">Yes</label>
//                 </div>

//                 <div className="radio-container">
//                   <input
//                     type="radio"
//                     id="no"
//                     name="idCardNeeded"
//                     value="no"
//                     checked={isIdRequired === "no"}
//                     onChange={e => handleOptionChange(e, "id")}
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//               </div>
//             </div>

//             <div id="event-type-checkbox" className="radio-box input-container">
//               <p>
//                 Do you want participants to specify their organisation and
//                 designation?
//               </p>
//               <div style={{ display: "flex", marginTop: 0, marginBottom: 12 }}>
//                 <div className="radio-container">
//                   <input
//                     type="radio"
//                     id="yes"
//                     name="organisationRequired"
//                     value="yes"
//                     checked={isOrganisationRequired === "yes"}
//                     onChange={e => handleOptionChange(e, "organisation")}
//                   />
//                   <label htmlFor="yes">Yes</label>
//                 </div>

//                 <div className="radio-container">
//                   <input
//                     type="radio"
//                     id="no"
//                     name="organisationRequired"
//                     value="no"
//                     checked={isOrganisationRequired === "no"}
//                     onChange={e => handleOptionChange(e, "organisation")}
//                   />
//                   <label htmlFor="no">No</label>
//                 </div>
//               </div>
//             </div>

//             <BottomButtons>
//               <SecondaryButton
//                 isBackButton={true}
//                 buttonName="Back"
//                 functionToPerform={finishedCreatingEvent}
//               />
//               <CustomButton
//                 buttonName="CREATE"
//                 color="#13E3AB"
//                 isSubmitButton
//               />
//             </BottomButtons>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// const styles = {
//   header: {
//     margin: "20px 0 30px 0",
//     padding: "20px O"
//   },
//   formContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between"
//   }
// };

// export default EventCreationForm;

