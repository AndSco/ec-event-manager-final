import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LegendItem = props => {
  return (
    <div style={{ display: "flex" }}>
      <FontAwesomeIcon icon={props.iconName} style={{ marginRight: 6 }} />
      <h4 style={{ color: "#D0D3D4" }}>{props.label}</h4>
    </div>
  );
}

const Legend = props => {
  const items = props.legendItems.map((item, index) => <LegendItem iconName={item.iconName} label={item.label} key={index} />)
  return (
    <div style={Styles.container}>
      {items}
    </div>
  );
}

const Styles = {
  container: {
    display: "flex",
    justifyContent: "space-around", 
    color: "#D0D3D4", 
    margin: "50px 0"
  }
}

export default Legend;