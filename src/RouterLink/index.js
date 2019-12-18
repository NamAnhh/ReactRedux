import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//list
import DashBoard from './../components/Client/Dashboard/index';
import Intro from './../components/Client/Intro/index';

//admin
import AdminDashBoard from './../components/Admin/Dashboard/index';

//add
import AddDashBoard from './../components/Client/Dashboard/Add/index';

//edit


function Routerlinkk() {
  return (
    <Router>
      <Switch>
        {/* route admin */}
        <Route path="/admin" component={AdminDashBoard} />

        {/* route client */}
        <Route path="/AddDashBoard" component={AddDashBoard} />
        <Route path="/intro" component={Intro} />
        <Route path="/" component={DashBoard} />
      </Switch>
    </Router>
  );
}

export default Routerlinkk;
