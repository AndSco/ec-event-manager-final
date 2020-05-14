import React from "react";
import UsefulLink from "./UIcomponents/UsefulLink";
import ExpandingSection from "./UIcomponents/ExpadingSection";

const LinkSection = ({links}) => {
  return (
    <ExpandingSection title="Know more">
      {links.map(link => (
        <UsefulLink linkName={link.linkName} url={link.url} key={link.url} />
      ))}
    </ExpandingSection>
  );
}

export default LinkSection;