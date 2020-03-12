import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWithLabel = props => {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

  return (
    <div>
      <FontAwesomeIcon
        className="action-icon"
        icon={props.iconName}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        onClick={props.onClickFunction}
        size={props.size ? props.size : "1x"}
      />
      <div
        className="tooltip"
        style={{
          ...Styles.tooltip,
          zIndex: 10,
          display: isTooltipVisible ? "inline" : "none"
        }}
      >
        <h5 style={{ margin: 0, color: "white" }}>{props.iconLabel}</h5>
      </div>
    </div>
  );
}

const Styles = {
  tooltip: {
    position: "absolute",
    marginLeft: -2,
    marginTop: 2,
    textAlign: "center",
    padding: "5px 10px",
    backgroundColor: "#1B2631"
  }
};

export default IconWithLabel;