import React from "react";

const CardContent = props => {
  return (
    <div className="card-content">
      {props.children}
    </div>  
  )
}

export default CardContent;