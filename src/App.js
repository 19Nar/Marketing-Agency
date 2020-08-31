import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/Navbar/NavBar";
import FirstPage from "./Components/FirstPage/FirstPage";
import About from "./Components/SecondPage/About";
import ServicesA from "./Components/ThirdPage/Coding/ServicesA";
import ServicesB from "./Components/ThirdPage/Coding/ServicesB";
import Contacts from "./Components/FourthPage/Contacts";
import Footer from "./Components/Footer/Footer";

const App = (props) => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <FirstPage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/services">
        <ServicesA />
        <ServicesB />
      </Route>
      <Route path="/contact">
        <Contacts />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;