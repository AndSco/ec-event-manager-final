import React from "react";

const colors = {
  pending: "#FEF31C",
  confirmed: "#13E3AB",
  rejected: "#E74C3C", 
  spam: "black"
};

const RegistrationStatusIcon = props => {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

  return (
    <div
      className="registration-status-icon"
      style={{
        width: 15,
        height: 15,
        borderRadius: 10,
        margin: "0 auto",
        backgroundColor: colors[props.status]
      }}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <div
        className="tooltip"
        style={{ ...Styles.tooltip, opacity: isTooltipVisible ? 1 : 0 }}
      >
        <h5 style={{ margin: 0, color: "#1B2631" }}>{props.status}</h5>
      </div>
    </div>
  );
}

const Styles = {
  tooltip: {
    backgroundColor: "white",
    position: "relative",
    left: -26,
    top: -6,
    width: 60,
    textAlign: "center",
    padding: 5
  }
};

export default RegistrationStatusIcon;