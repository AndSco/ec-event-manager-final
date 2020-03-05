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
  }
};

export default LogoImage;


