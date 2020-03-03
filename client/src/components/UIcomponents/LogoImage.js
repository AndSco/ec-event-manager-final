import React from "react";

const LogoImage = props => {
  return (
    <div style={styles.container}>
      <div className="logo-image" style={{...styles.image, backgroundImage: `url(${props.imageUrl})`}}>
      </div>
    </div>  
  )
}

const styles = {
  container: {
    padding: 12,
    // border: "1px solid #D0D3D4",
    // borderRadius: 100, 
    // "-webkit-box-shadow": "1px 2px 10px 0px rgba(0,0,0,1)",
    // "-moz-box-shadow": "1px 2px 8px 0px rgba(0,0,0,1)",
    // "box-shadow": "1px 2px 8px 0px rgba(0,0,0,1)"
  }
};

export default LogoImage;


