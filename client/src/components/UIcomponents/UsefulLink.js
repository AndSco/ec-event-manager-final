import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UsefulLink = ({linkName, url, isSmall}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      alt={linkName}
      className="useful-link"
      style={{fontSize: isSmall ? 15 : ""}}
    >
      <FontAwesomeIcon
        icon="external-link-alt"
        size="sm"
        style={{ paddingRight: ".3rem" }}
      />
      {linkName}
    </a>
  );
}

export default UsefulLink;