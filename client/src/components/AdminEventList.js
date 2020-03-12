import React from "react";
import RegistrationContext from "../contexts/eventRegistration/RegistrationContext";
import Loader from "./UIcomponents/Loader";
import Card from "./UIcomponents/Card";
import SectionTitle from "./UIcomponents/SectionTitle";
import EventsTable from "./EventsTable";
import CardContent from "./UIcomponents/CardContent";
import {sortEventsByDate} from "../utils/functions";


const AdminEventList = props => {
  const context = React.useContext(RegistrationContext);
  const { allEvents } = context;

  return (
    <div className="table-container">
      <Card>
        <CardContent>
          <SectionTitle
            title="Open events"
            callToAction="Explore, edit or delete events"
          />
          {allEvents ? (
            <EventsTable
              tableHeaders={[
                "Title & Link to event",
                "Date",
                "Venue",
                "Registered",
                ""
              ]}
              tableEntries={sortEventsByDate(allEvents)}
              isGeneralList={true}
            />
          ) : (
            <Loader />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminEventList;

