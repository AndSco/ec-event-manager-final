import React from "react";

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
            backgroundImage: `url("https://scontent.fmla3-1.fna.fbcdn.net/v/t1.0-9/11951150_1176857798997798_586973355802380784_n.png?_nc_cat=106&_nc_ohc=08pkNCGfLNwAX9kgGX8&_nc_ht=scontent.fmla3-1.fna&oh=a3d2e41b2a8a7c26de937c6148d1ce26&oe=5E95E93C")`,
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Logo;