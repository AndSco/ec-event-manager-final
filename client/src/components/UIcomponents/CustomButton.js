import React from "react";

const CustomButton = props => {
  return (
    <button className="main-button" style={{...styles.button, backgroundColor: props.color, width: props.largeButton ? "70%" : 250, ...props.buttonStyles}} onClick={props.functionToPerform} type={props.isSubmitButton ? "submit" : undefined}>
      <h3 style={styles.text}>{props.buttonName}</h3>
    </button>
  )
}

const styles = {
  button: { 
    padding: "10px 30px", 
    borderRadius: 30, 
    height: 40
  }, 
  text: {
    color: "white", 
    margin: 0
  }
};

export default CustomButton;


