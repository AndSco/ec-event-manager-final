import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt, faClock, faMapPin, faAngleDown, faAngleLeft, faAngleRight, faCheckCircle, faTrashAlt, faEdit, faUserPlus, faUserMinus, faLink, faTimesCircle, faUsers, faBan, faSortAlphaDown, faDesktop, faEnvelope, faFileExcel, faExternalLinkAlt, faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import ContextRegistration from "./contexts/eventRegistration/Context";
import Footer from './components/Footer';

library.add(fab, faCalendarAlt, faClock, faMapPin, faAngleDown, faAngleLeft, faAngleRight, faCheckCircle, faTrashAlt, faEdit, faUserPlus, faUserMinus, faLink, faTimesCircle, faUsers, faBan, faSortAlphaDown, faDesktop, faEnvelope, faFileExcel, faExternalLinkAlt, faPlusCircle);

function App() {
  const isInternetExplorer = /*@cc_on!@*/ false || !!document.documentMode;

  if (isInternetExplorer) {
    return (
      <div style={{withd: "100%", display: "flex", justifyContent: "center", padding: "50px 0"}}>
        <h2 id="explorer-message">Please use any other browser to access this page</h2>
      </div>  
    )
  }

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
