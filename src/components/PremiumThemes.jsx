import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import MainImage from "./MainImage";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    marginTop: "80px",
    backgroundColor: "white"
  },
  ptComponents: {
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(1, 2),
    marginBottom: "20px",
    marginTop: "10px"
  }
}));

export default function PremiumThemes() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid item className={classes.ptComponents} xs={12}>
        <Typography variant="h4">Premium Themes</Typography>
      </Grid>
      <Grid item className={classes.ptComponents} xs={12}>
        <Typography variant="subtitle2">
          Take your project to the next level with premium themes from our store
          – all built on Material-UI.
        </Typography>
      </Grid>
      <Grid container style={{ justifyContent: "center" }} xs={12}>
        <MainImage />
      </Grid>
      <Grid item className={classes.ptComponents} xs={12}>
        <Button
          style={{ marginTop: "40px", marginBottom: "20px" }}
          variant="outlined"
        >
          Browse Theme
        </Button>
      </Grid>
    </Container>
  );
}
