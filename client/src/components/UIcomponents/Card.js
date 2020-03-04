import React from "react";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";

const Card = props => {
  const context = React.useContext(RegistrationContext);
  const {isRegistering} = context;
  return (
    <div id={isRegistering ? "card-to-collapse" : "card"}>
      {props.children}
    </div>
  );
}


export default Card;