import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Launches from "./views/launches";
import Spacestations from "./views/spacestations";
import Astronauts from "./views/astronauts";
import Programs from "./views/programs";
import Agencies from "./views/agencies";
import Events from "./views/events";
import News from "./views/news";
import About from "./views/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Launches />
        </Route>
        <Route>
          <Spacestations />
        </Route>
        <Route>
          <Astronauts />
        </Route>
        <Router>
          <Programs />
        </Router>
        <Route>
          <Agencies />
        </Route>
        <Route>
          <Events />
        </Route>
        <Route>
          <News />
        </Route>
        <Route>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
