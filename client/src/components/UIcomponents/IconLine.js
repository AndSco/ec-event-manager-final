import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconLine = props => {
  return(
    <div className="icon-line">
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={props.iconName} className="icon" />
      </div>  
      <h4 className="event-details">{props.details}</h4>
    </div>  
  )
}

const styles = {
  iconContainer: {
    width: 30, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
  }
}

export default IconLine;