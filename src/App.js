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
import AppLayout from "./layout";

function App() {
  return (
    <Router>
      <Switch>
        <AppLayout exact path="/" component={Home} />
        <AppLayout exact path="/spacestations" component={Spacestations} />
        <AppLayout exact path="/launches" component={Launches} />
        <AppLayout exact path="/astronauts" component={Astronauts} />
        <AppLayout exact path="/programs" component={Programs} />
        <AppLayout exact path="/agencies" component={Agencies} />
        <AppLayout exact path="/events" component={Events} />
        <AppLayout exact path="/news" component={News} />
        <AppLayout exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
