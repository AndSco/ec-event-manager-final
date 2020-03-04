import React from "react";
import SecondaryButton from "./SecondaryButton";
import CustomButton from "./CustomButton";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";


const BottomButtons = props => {
  const context = React.useContext(RegistrationContext);

  return (
    <div
      style={{ ...styles.container, justifyContent: props.isSingleButton ? "center" : "space-between" }}
      className="button-container"
    >
      {props.children}
      
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center", 
    // margin: "30px 0", 
    width: "100%"
  }
};

export default BottomButtons;


