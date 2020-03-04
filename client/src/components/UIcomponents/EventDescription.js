import React from "react";
import EventSectionTitle from "./EventSectionTitle";

const EventDescription = (props) => {
  return (
    <div>
      <EventSectionTitle title="description" />
      <p style={styles.paragraph} id="event-description">{props.description}</p>
    </div>  
  )
}

const styles = {
  paragraph: {
    // margin: 50, 
    textAlign: "justify"
  }
}

export default EventDescription;