import React from "react";

const InputLogin = props => {
  const [inputValue, setInputValue] = React.useState("");
  const {onInputChange} = props;

  React.useEffect(() => {
    onInputChange(props.inputName, inputValue);
  }, [inputValue, onInputChange])

  return (
    <div
      style={{ ...styles.inputContainer, width: 270 }}
      className="input-container"
    >
      <label htmlFor={props.inputName}>
        {props.inputName}
        {props.isCompulsory && <span style={{ color: "red" }}> *</span>}
      </label>

      <input
        type="text"
        placeholder="test"
        name={props.inputName}
        style={{ width: "100%" }}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      {/* {errorMessage && <h5 className="error-message">{errorMessage}</h5>} */}
    </div>
  );
}

const styles = {
  inputContainer: {
    // height: 40, 
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between", 
    padding: "6px 10px", 
    margin: 10
  }
};

export default InputLogin;