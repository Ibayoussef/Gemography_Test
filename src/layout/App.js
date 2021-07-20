import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FetchData from "./FetchData";
import Home from "../pages/Home";
export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <FetchData />
      </div>
    </Router>
  );
}
