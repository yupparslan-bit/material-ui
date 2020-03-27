import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    marginTop: "40px"
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F5F5F5"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <LeftSide />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <RightSide />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
