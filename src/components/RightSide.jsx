import React from "react";
import BuildIcon from "@material-ui/icons/Build";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    marginBottom: "20px"
  },
  paperprops: {
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(3, 2),
    width: "100%",
    height: theme.spacing(21),
    backgroundColor: "black",
    marginTop: theme.spacing(4)
  }
}));

export default function RightSide() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid items md={1}>
        <BuildIcon style={{ color: "#3C76D2" }} />
      </Grid>
      <Grid items md={11} style={{ marginBottom: "15px" }}>
        <Typography variant="h6">Usage</Typography>
      </Grid>
      <Typography variant="body1">
        Material-UI components work without any additional setup, and don't
        pollute the global scope.
      </Typography>
      <Paper
        variant="outlined"
        elevation={4}
        className={classes.paperprops}
        style={{ backgroundColor: "black" }}
      >
        {`$ import React from 'react';
            import { Button } from '@material-ui/core';

            function App() {
            return <Button color="primary">Hello World</Button>;
        `}
      </Paper>

      <Grid lg={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Divider variant="middle" />
      </Grid>
      <Grid md={12}>
        <Button>Explore the Docs</Button>
      </Grid>
    </Grid>
  );
}
