import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    //backgroundColor: theme.palette.background.paper,
    display: "flex",
    padding: 0,
    height: 300,
    backgroundColor: "#B4EEB4",
  },
  media: {
    width: 300,
    height: 300,
    backgroundColor: "blue",
  },
  text: {
    backgroundColor: "red",
  },
}));

function Cards() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} />
        <CardContent className={classes.text}>
          <Typography>Text</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
