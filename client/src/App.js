import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt, faClock, faMapPin, faAngleDown, faAngleLeft, faAngleRight, faCheckCircle, faTrashAlt, faEdit, faUserPlus, faUserMinus, faLink, faTimesCircle, faUsers, faBan, faSortAlphaDown, faDesktop, faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import ContextRegistration from "./contexts/eventRegistration/Context";
import Footer from './components/Footer';

library.add(fab, faCalendarAlt, faClock, faMapPin, faAngleDown, faAngleLeft, faAngleRight, faCheckCircle, faTrashAlt, faEdit, faUserPlus, faUserMinus, faLink, faTimesCircle, faUsers, faBan, faSortAlphaDown, faDesktop, faEnvelope);

function App() {
  return (
    <Router>
      <ContextRegistration>
        <div className="App">
          <Navbar />
          <Body>
            <Main />
          </Body>
          <Footer />
        </div>
      </ContextRegistration>
    </Router>
  );
}

export default App;
