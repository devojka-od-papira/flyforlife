import Home from "./views/home";
import Launches from "./views/launches";
import Spacestations from "./views/spacestations";
import Astronauts from "./views/astronauts";
import Programs from "./views/programs";
import Agencies from "./views/agencies";
import Events from "./views/events";
import News from "./views/news";
import About from "./views/about";

export const routes = [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
  {
    path: "/launches",
    component: () => <Launches />,
    exact: false,
  },
  {
    path: "/spacestations",
    component: () => <Spacestations />,
    exact: false,
  },
  {
    path: "/astronauts",
    component: () => <Astronauts />,
    exact: false,
  },
  {
    path: "/programs",
    component: () => <Programs />,
    exact: false,
  },
  {
    path: "/agencies",
    component: () => <Agencies />,
    exact: false,
  },
  {
    path: "/events",
    component: () => <Events />,
    exact: false,
  },
  {
    path: "/news",
    component: () => <News />,
    exact: false,
  },
  {
    path: "/about",
    component: () => <About />,
    exact: false,
  },
];
