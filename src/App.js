import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./views/home";
import Launches from "./views/launches";
import Spacestations from "./views/spacestations";
import Astronauts from "./views/astronauts";
import Programs from "./views/programs";
import Agencies from "./views/agencies";
import Events from "./views/events";
import News from "./views/news";
import About from "./views/about";
import AppLayout from "./layout";

function App() {
  return (
    <Router>
      <Switch>
        <AppLayout exact component={Home} />
        <AppLayout exact component={Spacestations} />
        <AppLayout exact component={Launches} />
        <AppLayout exact component={Astronauts} />
        <AppLayout exact component={Programs} />
        <AppLayout exact component={Agencies} />
        <AppLayout exact component={Events} />
        <AppLayout exact component={News} />
        <AppLayout exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
