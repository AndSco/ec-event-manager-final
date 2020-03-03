import React from "react";
import SecondaryButton from "./SecondaryButton";
import CustomButton from "./CustomButton";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";


const BottomButtons = props => {
  const context = React.useContext(RegistrationContext);

  return (
    <div style={styles.container}>
      {props.children}
      {/* <SecondaryButton
        isBackButton={true}
        buttonName={props.secondaryText}
        functionToPerform={context.closeRegistrationForm}
      />
      <CustomButton
        buttonName={props.successText}
        color="#13E3AB"
        isSubmitButton
      /> */}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center", 
    margin: "30px 0", 
    width: "100%"
  }
};

export default BottomButtons;


