import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";

const Footer = props => {
  const context = React.useContext(RegistrationContext);
  const { isRegistering } = context;

  return (
    <div className="footer" id={isRegistering ? "hidable-footer" : ""}>
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