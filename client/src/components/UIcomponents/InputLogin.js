import React from "react";

const InputLogin = props => {
  const [inputValue, setInputValue] = React.useState("");
  const { onInputChange, inputName } = props;

  React.useEffect(() => {
    onInputChange(inputName, inputValue);
  }, [inputValue, onInputChange, inputName])

  return (
    <div
      style={{ ...styles.inputContainer, width: 270 }}
      className="input-container"
    >
      <label htmlFor={inputName}>
        {inputName}
        {props.isCompulsory && <span style={{ color: "red" }}> *</span>}
      </label>

      <input
        type={props.isPassword ? "password" : "text"}
        placeholder={props.placeholder}
        name={inputName}
        style={{ width: "100%" }}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onFocus={props.resetError}
      />
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