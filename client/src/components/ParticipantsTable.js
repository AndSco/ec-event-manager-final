import React from "react";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import {
  updateParticipantRegistrationOnDB} from "../dbFunctions/handlers/participants";
import RegistrationStatusIcon from "./UIcomponents/RegistrationStatusIcon";
import CellContent from "./UIcomponents/CellContent";
import Checkbox from "./UIcomponents/Checkbox";
import { sendEmail } from "../utils/functions";
import IconWithLabel from "./UIcomponents/IconWithLabel";


const ParticipantsTable = props => {
  
  const context = React.useContext(RegistrationContext);
  const {
    currentEvent,
    manageModal,
    specifyParticipantId,
    isSelectAllActive, 
    onUserSelectionHandler,
    pushInBlock, 
    selectAll, 
    deselectAll, 
    resetSwitch
  } = context;


  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input 
              type="checkbox" 
              checked={isSelectAllActive}
              onChange={() => {
              if (isSelectAllActive) {
                deselectAll();
              } else {
                selectAll();
                pushInBlock(props.tableEntries);
              }
              
              }} />
          </th>
          {props.tableHeaders.map((header, i) => (
            <th key={i}>
              <h3>{header.name}</h3>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.tableEntries &&
          props.tableEntries.map((entry, i) => {
            return (
              <tr key={i}>
                <td>
                  <Checkbox
                    participantId={entry._id}
                    onChangeFunction={() => {
                      resetSwitch("selectAll");
                      resetSwitch("deselectAll");
                      onUserSelectionHandler(entry);
                    }}
                  />
                </td>
                <td>
                  <CellContent
                    value={`${entry.secondName} ${entry.firstName}`}
                    isImportant={true}
                  />
                </td>

                {currentEvent.isOrganisationRequired && (
                  <td>
                    <CellContent value={entry.organisation} />
                  </td>
                )}

                {currentEvent.isOrganisationRequired && (
                  <td>
                    <CellContent value={entry.designation} />
                  </td>
                )}

                {currentEvent.isIdRequired && (
                  <td>
                    <CellContent value={entry.idCardNumber} />
                  </td>
                )}

                <td>
                  <CellContent value={entry.email} />
                </td>
                <td>
                  <CellContent value={entry.mobile} />
                </td>
                <td>
                  <RegistrationStatusIcon status={entry.registrationStatus} />
                </td>
                <td className="icon-cell">
                  {entry.registrationStatus !== "confirmed" && (
                    <IconWithLabel
                      iconName="user-plus"
                      iconLabel="Confirm"
                      onClickFunction={() => {
                        sendEmail("accept", [entry], currentEvent);
                        specifyParticipantId(entry._id);
                        manageModal("accept", entry);
                      }}
                    />
                  )}
                  {entry.registrationStatus !== "rejected" && (
                    <IconWithLabel
                      iconName="user-minus"
                      iconLabel="Reject"
                      onClickFunction={() => {
                        sendEmail("reject", [entry], currentEvent);
                        specifyParticipantId(entry._id);
                        manageModal("reject", entry);
                      }}
                    />
                  )}
                  {entry.registrationStatus !== "spam" && (
                    <IconWithLabel
                      iconName="ban"
                      iconLabel="Mark as spam"
                      onClickFunction={() => {
                        updateParticipantRegistrationOnDB(entry._id, "spam");
                        props.refreshEvent();
                      }}
                    />
                  )}
                  <IconWithLabel
                    iconName="trash-alt"
                    iconLabel="Delete"
                    onClickFunction={async () => {
                      specifyParticipantId(entry._id);
                      manageModal("delete", entry);
                    }}
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ParticipantsTable;

