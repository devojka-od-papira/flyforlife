import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SocialMedia from "../socialMedia";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    textDecorationLine: "none",
  },
  ul: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    lineHeight: 24,
    color: "#B4EEB4",
  },
  p: {
    color: "#B4EEB4",
    display: "flex",
    alignItems: "center",
    fontSize: 32,
    marginRight: 100,
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <p className={classes.p}>FLYFORLIFE</p>
      <ul className={classes.ul}>
        <Link className={classes.link} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.link} to="/launches">
          <li>Launches</li>
        </Link>
        <Link className={classes.link} to="/spacestations">
          <li>Spacestations</li>
        </Link>
        <Link className={classes.link} to="/astronauts">
          <li>Astronauts</li>
        </Link>
        <Link className={classes.link} to="/programs">
          <li>Programs</li>
        </Link>
        <Link className={classes.link} to="/agencies">
          <li>Agencies</li>
        </Link>
        <Link className={classes.link} to="/events">
          <li>Events</li>
        </Link>
        <Link className={classes.link} to="/news">
          <li>News</li>
        </Link>
        <Link className={classes.link} to="/about">
          <li>About</li>
        </Link>
      </ul>
      <SocialMedia />
    </nav>
  );
}

export default Nav;
