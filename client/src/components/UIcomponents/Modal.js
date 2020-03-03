import React from "react";
import Card from "./Card";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";


const Modal = props => {
  const context = React.useContext(RegistrationContext);
  const {closeModal} = context;


  return (
    <div
      id="modal"
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <div
        className="confirmation-box"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h3>{props.message}</h3>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;