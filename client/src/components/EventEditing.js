import React from "react";
import EventCreationForm from "./EventCreationForm";


const EventEditing = () => {
  return <EventCreationForm />
};

export default EventEditing;


// import React from "react";
// import Card from "./UIcomponents/Card";
// import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
// import SectionTitle from "./UIcomponents/SectionTitle";
// import BottomButtons from "./UIcomponents/BottomButtons";
// import SecondaryButton from "./UIcomponents/SecondaryButton";
// import CustomButton from "./UIcomponents/CustomButton";
// import CardContent from "./UIcomponents/CardContent";
// import {editEvent} from "../dbFunctions/handlers/events";
// import { formReducer, FORM_UPDATE } from "../dbFunctions/reducers/formReducer";
// import EventCreationForm from "./EventCreationForm";


// const FormEntry = props => {
//   const [inputValue, setInputValue] = React.useState(props.inputValue);
//   const handleChange = e => setInputValue(e.target.value);

//   React.useEffect(() => console.log(inputValue), [inputValue]);
  
//   return (
//     <div
//       className="event-edit-input"
//       style={{ display: "flex", flexDirection: "column", margin: "25px 0" }}
//     >
//       <label htmlFor="title">{props.inputName.toUpperCase()}</label>
//       {props.isDate || props.isTime || props.isProgramme ? (
//         <p>{props.inputValue.slice(0, 10)}</p>
//       ) : props.isTextArea ? (
//         <textarea
//           value={inputValue}
//           onChange={handleChange}
//           rows={10}
//           placeholder={props.inputValue}
//         />
//       ) : (
//         <input
//           type={props.inputType}
//           name={props.inputName}
//           placeholder={props.inputValue}
//           value={inputValue}
//           onChange={handleChange}
//           // className="event-edit-input"
//         />
//       )}
//     </div>
//   );
// }

// const EventEditing = props => {
//   const context = React.useContext(RegistrationContext);
//   const { eventCurrentlyEditing, finishedEditingEvent } = context;

//   const [formState, dispatchFormState] = React.useReducer(
//     formReducer,
//     eventCurrentlyEditing
//   );

//   const handleInputChange = (identifier, value, isValid) => {
//     dispatchFormState({
//       type: FORM_UPDATE,
//       identifier,
//       value,
//       isValid
//     });
//   };

//   const handleSubmit = async () => {
//     const configsObject = formState.inputValues;
//     console.log("Editing", configsObject);
//     // await editEvent(eventCurrentlyEditing._id, configsObject);
//     // finishedEditingEvent();
//   };

//   console.log("CURRENTLY EDITING", eventCurrentlyEditing);
//   return (
//       <EventCreationForm />
//     // <div className="event-container">
//     //   <Card>
//     //     <CardContent>
//     //       <SectionTitle
//     //         title={eventCurrentlyEditing.title}
//     //         callToAction="Edit the event"
//     //       />
//     //       <form style={{ margin: "40px 10px" }}>
//     //         <FormEntry
//     //           inputName="title"
//     //           inputType="text"
//     //           inputValue={eventCurrentlyEditing.title}
//     //           onInputChange={handleInputChange}
//     //         />
//     //         <FormEntry
//     //           inputName="date"
//     //           inputType="date"
//     //           inputValue={eventCurrentlyEditing.date}
//     //           isDate={true}
//     //           onInputChange={handleInputChange}
//     //         />
//     //         <FormEntry
//     //           inputName="startingTime"
//     //           inputType="time"
//     //           inputValue={eventCurrentlyEditing.startingTime}
//     //           isTime={true}
//     //           onInputChange={handleInputChange}
//     //         />
//     //         <FormEntry
//     //           inputName="endingTime"
//     //           inputType="time"
//     //           inputValue={eventCurrentlyEditing.endingTime}
//     //           isTime={true}
//     //           onInputChange={handleInputChange}
//     //         />
//     //         <FormEntry
//     //           inputName="venue"
//     //           inputType="text"
//     //           inputValue={eventCurrentlyEditing.venue}
//     //           onInputChange={handleInputChange}
//     //         />
//     //         <FormEntry
//     //           inputName="description"
//     //           inputValue={eventCurrentlyEditing.description}
//     //           isTextArea={true}
//     //           onInputChange={handleInputChange}
//     //         />
//     //         <FormEntry
//     //           inputName="Programme URL"
//     //           inputValue={eventCurrentlyEditing.programmeImage.programmeUrl}
//     //           isProgramme={true}
//     //           onInputChange={handleInputChange}
//     //         />
//     //         <FormEntry
//     //           inputName="Video URL"
//     //           inputType="text"
//     //           inputValue={eventCurrentlyEditing.videoUrl}
//     //           onInputChange={handleInputChange}
//     //         />
//     //       </form>
//     //       <BottomButtons>
//     //         <SecondaryButton
//     //           buttonName="Back"
//     //           isBackButton={true}
//     //           functionToPerform={finishedEditingEvent}
//     //         />
//     //         <CustomButton
//     //           buttonName="Update"
//     //           functionToPerform={handleSubmit}
//     //           isSubmitButton={true}
//     //           color="#13E3AB"
//     //         />
//     //       </BottomButtons>
//     //     </CardContent>
//     //   </Card>
//     // </div>
//   );
// }

// export default EventEditing;