import React from "react";
import Card from "./UIcomponents/Card";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import SectionTitle from "./UIcomponents/SectionTitle";
import BottomButtons from "./UIcomponents/BottomButtons";
import SecondaryButton from "./UIcomponents/SecondaryButton";
import CustomButton from "./UIcomponents/CustomButton";
import CardContent from "./UIcomponents/CardContent";


const FormEntry = props => {
  return (
    <div
      className="event-edit-input"
      style={{ display: "flex", flexDirection: "column", margin: "25px 0" }}
    >
      <label htmlFor="title">{props.inputName.toUpperCase()}</label>
      {props.isDate || props.isTime || props.isProgramme ? (
        <p>{props.inputValue.slice(0, 10)}</p>
      ) 
       : props.isTextArea ? (
        <textarea
          // style={{ width: "100%", border: "none" }}
          value={props.inputValue}
          // onChange={e => handleChange(e)}
          // onBlur={updateInput}
          rows={10}
          placeholder={props.inputValue}
          // required={props.isCompulsory}
        />
      ) : (
        <input
          type={props.inputType}
          name={props.inputName}
          placeholder={props.inputValue}
          // value={props.inputValue}
          // className="event-edit-input"
        />
      )}
    </div>
  );
}

const EventEditing = props => {
  const context = React.useContext(RegistrationContext);
  const { eventCurrentlyEditing, finishedEditingEvent } = context;

  return (
    <div className="event-container">
      <Card>
        <CardContent>
          <SectionTitle
            title={eventCurrentlyEditing.title}
            callToAction="Edit the event"
          />
          <form style={{ margin: "40px 10px" }}>
            <FormEntry
              inputName="title"
              inputType="text"
              inputValue={eventCurrentlyEditing.title}
            />
            <FormEntry
              inputName="date"
              inputType="date"
              inputValue={eventCurrentlyEditing.date}
              isDate={true}
            />
            <FormEntry
              inputName="startingTime"
              inputType="time"
              inputValue={eventCurrentlyEditing.startingTime}
              isTime={true}
            />
            <FormEntry
              inputName="endingTime"
              inputType="time"
              inputValue={eventCurrentlyEditing.endingTime}
              isTime={true}
            />
            <FormEntry
              inputName="venue"
              inputType="text"
              inputValue={eventCurrentlyEditing.venue}
            />
            <FormEntry
              inputName="description"
              inputValue={eventCurrentlyEditing.description}
              isTextArea={true}
            />
            <FormEntry
              inputName="PDF Programme"
              inputValue={eventCurrentlyEditing.pdfProgramme}
              isProgramme={true}
            />
            <FormEntry
              inputName="Video URL"
              inputType="text"
              inputValue={eventCurrentlyEditing.videoUrl}
            />
          </form>
          <BottomButtons>
            <SecondaryButton
              buttonName="Back"
              isBackButton={true}
              functionToPerform={finishedEditingEvent}
            />
            <CustomButton
              buttonName="Update"
              functionToPerform={() => console.log("UPDATING")}
              isSubmitButton={true}
              color="#13E3AB"
            />
          </BottomButtons>
        </CardContent>
      </Card>
    </div>
  );
}

export default EventEditing;