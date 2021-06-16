import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  media: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    marginLeft: 250,
  },
  icon: {
    marginLeft: 10,
  },
}));

function SocialMedia() {
  const classes = useStyles();
  return (
    <div className={classes.media}>
      <FacebookIcon className={classes.icon} />
      <InstagramIcon className={classes.icon} />
      <TwitterIcon className={classes.icon} />
    </div>
  );
}

export default SocialMedia;
