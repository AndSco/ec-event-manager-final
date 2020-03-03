import React from "react";
import InputLogin from "./UIcomponents/InputLogin";
import SectionTitle from "./UIcomponents/SectionTitle";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import CustomButton from "./UIcomponents/CustomButton";
import { authenticate } from "../dbFunctions/handlers/login";


const PasswordBox = props => {
  const context = React.useContext(RegistrationContext);
  const { logInAdmin } = context;

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const updateState = (entry, value) => {
    if (entry === "username") {
      setUserName(value);
    }
    if (entry === "password") {
      setPassword(value);
    }
  }

  const login = async () => {
    const areCredentialsRight = await authenticate(userName, password);
    console.log("are creds right?", areCredentialsRight);
    if (areCredentialsRight) {
      console.log("logging you in!");
      logInAdmin();
    }
    return;
  }

  return (
    <div
      className="confirmation-box-container"
      id="password-box"
      style={{ marginTop: 40 }}
    >
      <SectionTitle title="Enter your credentials to access" />
      <div id="confirmation-box" style={{ paddingTop: 20 }}>
        <InputLogin
          isCompulsory={true}
          inputName="username"
          onInputChange={updateState}
          placeholder="enter username"
        />
        <InputLogin
          isPassword={true}
          isCompulsory={true}
          inputName="password"
          onInputChange={updateState}
          placeholder="enter password"
        />
        <div style={{ marginTop: 20 }}>
          <CustomButton
            buttonName="ENTER"
            color="#FF006C"
            functionToPerform={login}
          />
        </div>
      </div>
    </div>
  );
}

export default PasswordBox;