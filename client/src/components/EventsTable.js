import React from "react";
import { Link } from "react-router-dom";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import CellContent from "./UIcomponents/CellContent";
import {formatDate} from "../utils/functions";
import IconWithLabel from "./UIcomponents/IconWithLabel";


const Td = ({ children, to }) => {
  // Conditionally wrapping content into a link
  const ContentTag = to ? Link : "div";

  return (
    <td>
      <ContentTag to={to}>{children}</ContentTag>
    </td>
  );
};

const EventsTable = props => {
  const context = React.useContext(RegistrationContext);
  const { prepareEventToBeDeleted, startEditingEvent, manageModal } = context;

  

  return (
    <table className="table events">
      <thead>
        <tr>
          {props.tableHeaders.map((header, i) => (
            <th key={i}>
              <h3>{header}</h3>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.tableEntries.map((entry, i) => {
          return (
            <tr key={i}>
              <Td to={`/events/${entry._id}`}>
                <CellContent value={entry.title} isImportant={true} />
              </Td>
              <td>
                <CellContent value={formatDate(entry.date)} />
              </td>
              <td>
                <CellContent value={entry.venue} />
              </td>
              <td>
                <CellContent value={entry.participantsRegistered.length} />
              </td>
              <td className="icon-cell">
                <IconWithLabel
                  iconName="edit"
                  iconLabel="Edit event"
                  onClickFunction={() => {
                    startEditingEvent(entry);
                  }}
                />
                <IconWithLabel
                  iconName="trash-alt"
                  iconLabel="Delete event"
                  onClickFunction={() => {
                    prepareEventToBeDeleted(entry._id);
                    manageModal("deleteEvent", entry);
                  }}
                />
                <Link to={`/${entry._id}`}>
                  <IconWithLabel
                    iconName="users"
                    iconLabel="Manage participants"
                  />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>  
  );
}

export default EventsTable;
