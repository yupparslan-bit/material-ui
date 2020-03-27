import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
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
    height: theme.spacing(6),
    backgroundColor: "black"
  }
}));

export default function LeftSide() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid items md={1}>
        <GetAppIcon style={{ color: "#3C76D2" }} />
      </Grid>
      <Grid items md={11} style={{ marginBottom: "15px" }}>
        <Typography variant="h6">Installation</Typography>
      </Grid>
      <Typography variant="body1">
        Install Material-UI's source files via npm. We take care of injecting
        the CSS needed.
      </Typography>
      <Paper
        variant="outlined"
        elevation={4}
        className={classes.paperprops}
        style={{ backgroundColor: "black" }}
      >
        `$ npm install @material-ui/core`
      </Paper>
      <Grid items md={12} style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Link href="#" color="inherit">
          <Typography variant="body1">or Use a CDN.</Typography>
        </Link>
      </Grid>
      <Grid items>
        <Typography variant="body1">Load the default Roboto Font.</Typography>
      </Grid>
      <Grid items md={12}>
        <Paper
          variant="outlined"
          elevation={3}
          className={classes.paperprops}
          style={{ height: "75%", maxWidth: "100%" }}
        >
          <Typography
            style={{
              overflowY: "auto",
              paddingTop: "12px",
              paddingBottom: "12px",
              wrap: "nowrap"
            }}
            variant="body1"
          >
            {`<link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />`}
          </Typography>
        </Paper>
      </Grid>
      <Grid lg={12} style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Divider variant="middle" />
      </Grid>
      <Grid md={12} style={{ marginBottom: "-20px" }}>
        <Button>Read Installation Docs</Button>
      </Grid>
    </Grid>
  );
}
