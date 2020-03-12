import React from "react";
import RegistrationContext from "../../contexts/eventRegistration/RegistrationContext";

const Checkbox = props => {
  const [isChecked, setIsChecked] = React.useState(false);
  const { participantId } = props;
  const context = React.useContext(RegistrationContext);
  const { selectedParticipants } = context;

  const isParticipantSelected = React.useCallback(() => {
    return selectedParticipants.some(participant => participant._id === participantId);
  }, [selectedParticipants, participantId])

  React.useEffect(() => {
    setIsChecked(isParticipantSelected());
  }, [selectedParticipants, participantId, isParticipantSelected]);


  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
        props.onChangeFunction();
      }}
    />
  );
}

export default Checkbox;