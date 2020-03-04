import React from "react";
import CustomButton from "./UIcomponents/CustomButton";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import IconLine from "./UIcomponents/IconLine";
import AfterRegistrationBox from "./AfterRegistrationBox";
import Logo from "./Logo";


// const Logo = props => {
//   return (
//     <div
//       className="logo-container"
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         position: "relative",
//         top: -40
//       }}
//     >
//       <div className="logo-surrounding-circle" style={{width: 90, height: 90, borderRadius: 45, backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>
//         <div
//           className="logo"
//           style={{
//             width: 80,
//             height: 80,
//             borderRadius: 40,
//             //backgroundColor: "white",
//             backgroundImage: `url("https://scontent.fmla3-1.fna.fbcdn.net/v/t1.0-9/11951150_1176857798997798_586973355802380784_n.png?_nc_cat=106&_nc_ohc=08pkNCGfLNwAX9kgGX8&_nc_ht=scontent.fmla3-1.fna&oh=a3d2e41b2a8a7c26de937c6148d1ce26&oe=5E95E93C")`,
//             backgroundSize: "contain",
//             backgroundPosition: 'center',

//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }


const EventHeader = props => {
  const context = React.useContext(RegistrationContext);
  const {
    isRegistrationButtonHidden,
    isRegistering,
    closeRegistrationForm
  } = context;

  return (
    <div className="event-header" id={isRegistering ? "header-to-hide" : ""}>
      <Logo />
      <div className="event-header-content">
        <div className="details">
          <h3 className="event-title">{props.title}</h3>
          <div className="event-info" style={{margin: "20px 0"}}>
            <IconLine iconName="calendar-alt" details={props.date} />
            <IconLine iconName="clock" details={props.time} />
            <IconLine iconName="map-pin" details={props.venue} />
          </div>  
        </div>
        {!isRegistrationButtonHidden ? (
          <CustomButton
            buttonName={!isRegistering ? "Register" : "Back to event"}
            functionToPerform={!isRegistering ?context.openRegistrationForm : closeRegistrationForm}
            color="#FF006C"
          />
        ) : (
          <AfterRegistrationBox />
        )}
      </div>
    </div>
  );
}

export default EventHeader;