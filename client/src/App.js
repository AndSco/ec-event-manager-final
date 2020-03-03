import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt, faClock, faMapPin, faAngleDown, faAngleLeft, faAngleRight, faCheckCircle, faTrashAlt, faEdit, faUserPlus, faUserMinus, faLink, faTimesCircle, faUsers, faBan, faSortAlphaDown
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import ContextRegistration from "./contexts/eventRegistration/Context";

library.add(faCalendarAlt, faClock, faMapPin, faAngleDown, faAngleLeft, faAngleRight, faCheckCircle, faTrashAlt, faEdit, faUserPlus, faUserMinus, faLink, faTimesCircle, faUsers, faBan, faSortAlphaDown);

function App() {
  return (
    <Router>
      <ContextRegistration>
      <div className="App">
        <Navbar />
        <Body>
          <Main />
        </Body>
      </div>
      </ContextRegistration>
    </Router>
  );
}

export default App;
