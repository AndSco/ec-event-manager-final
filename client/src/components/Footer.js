import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = props => {
  const isIE = /*@cc_on!@*/ false || !!document.documentMode;

  console.log("is this Explorer?", isIE);
  return (
    <div id="footer">
      <div id="footer-content">
        <a href="https://www.facebook.com/KummissjoniEwropea/" target="blank">
          <h5>
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </h5>
        </a>
        <a href="https://twitter.com/ECRepMalta" target="blank">
          <h5>
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </h5>
        </a>
        <a href="https://www.instagram.com/euinmalta/" target="blank">
          <h5>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </h5>
        </a>
        <a href="https://ec.europa.eu/malta/" target="blank">
          <h5>
            <FontAwesomeIcon icon="desktop" size="2x" />
          </h5>
        </a>
        <a href="mailto:comm-rep-mt@ec.europa.eu" target="blank">
          <h5>
            <FontAwesomeIcon icon="envelope" size="2x" />
          </h5>
        </a>
      </div>
    </div>
  );
}

export default Footer;