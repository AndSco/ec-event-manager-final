import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "../pages/admin/DashboardPage";
import EventPage from "../pages/EventPage";
import AdminEventDetailsPage from "../pages/admin/AdminEventDetailsPage";



const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route path="/events/:eventId" component={EventPage} />
      <Route path="/:eventId" component={AdminEventDetailsPage} />
    </Switch>
  );
};

export default Main;

//<Route exact path="/admin" component={DashboardPage} />