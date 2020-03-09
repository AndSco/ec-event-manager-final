import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondaryButton = props => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button className="secondary-button" onClick={props.functionToPerform}>
        {props.isBackButton && <FontAwesomeIcon icon="angle-left" style={{paddingRight: 5}} />}
        {props.buttonName}
      </button>
    </div>
  );
}


export default SecondaryButton;


