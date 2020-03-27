import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseLine from "@material-ui/core/CssBaseline";
import logo from "../assets/logo.svg";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    height: "200px",
    width: "200px",

    ["@media screen and (min-device-width : 320px) and (max-device-width : 1024px)"]: {
      width: "100px",
      height: "100px",
      marginTop: "-40px",
      align: "center"
    }
  },
  hFont: {
    color: "#3C76D2",
    fontFamily: ["Barlow", "sans-serif"].join(","),
    ["@media screen and (min-device-width : 320px) and (max-device-width : 1024px)"]: {
      flexDirection: "column",
      alignText: "center",
      justifyContent: "center",
      margin: "auto",
      align: "center"
    }
  }
}));

export default function MainBody() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <CssBaseLine />
        <Grid
          container
          spacing={2}
          style={{ marginTop: "120px", marginBottom: "80px" }}
        >
          <Box m="auto">
            <Grid item xs={12} md={3}>
              <img src={logo} className={classes.root} />
            </Grid>
          </Box>

          <Grid container item xs={12} md={9} className={classes.hFont}>
            <Typography style={{ marginTop: "5px" }} variant="h2">
              Material-Ui
            </Typography>
            <Typography variant="h5">
              {" "}
              React components for faster and easier web development.
              <br /> Build your own design system, or start with Material
              Design.
            </Typography>

            <Button
              variant="outlined"
              style={{ marginTop: "20px", color: "inherit" }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
