import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import SmallImages from "./ThreeSmallImages";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "red",
    height: "100vh",
    width: "1200px"
  },
  sponstext: {
    justifyContent: "center",
    marginTop: "10px"
  }
}));

export default function OurSpon() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Divider />
      <Container>
        <Grid
          item
          xs={12}
          className={classes.sponstext}
          style={{ marginTop: "45px" }}
        >
          <Typography variant="h3" align="center">
            Material-UI's sponsors
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.sponstext}
          style={{ marginBottom: "45px" }}
        >
          <Typography variant="body1" align="center">
            The continued development and maintenance of Material-UI is made
            possible by these generous sponsors:
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.sponstext}>
          <Typography variant="h4" align="center">
            Diamond 💎
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.sponstext}
          style={{ marginBottom: "45px" }}
        >
          <Typography variant="body1" align="center">
            3/3 Slots Available
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.sponstext}>
          <Typography variant="h4" align="center">
            Gold 🏆
          </Typography>
        </Grid>
        <SmallImages />
      </Container>
    </React.Fragment>
  );
}
