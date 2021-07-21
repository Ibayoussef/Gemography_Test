import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchData from "./FetchData";
import Home from "../pages/Home";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <FetchData />
    </Router>
  );
}
