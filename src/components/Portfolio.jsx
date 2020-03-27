import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Profiles from "./Profiles";

export default function Portfolio() {
  return (
    <Container style={{ marginTop: "45px" }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Praise for Material-UI
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <Typography variant="body2" align="center">
          Here's what some of our users are saying.
        </Typography>
      </Grid>
      <Profiles />
    </Container>
  );
}
