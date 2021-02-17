import React from 'react';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";
import Businesses from "./Businesses";

const Router = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact/>
      
      <Route path={`${match.businesses}/:name`} component={Businesses} />
    </Switch>
  </Router>
);

export default Router;