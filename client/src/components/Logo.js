import React from "react";
import logo from "../assets/images/ec_logo.png";

const Logo = props => {
  return (
    <div
      className="logo-container"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: -40
      }}
    >
      <div
        className="logo-surrounding-circle"
        style={{
          width: 90,
          height: 90,
          borderRadius: 45,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          className="logo"
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            //backgroundColor: "white",
            backgroundImage: `url(${logo})`, 
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Logo;