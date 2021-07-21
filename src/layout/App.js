import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchData from "./FetchData";
import Home from "../pages/Home";
import Header from "../components/Header";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      <FetchData />
    </Router>
  );
}
