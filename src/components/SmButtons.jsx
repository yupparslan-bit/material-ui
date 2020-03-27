import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    height: "100%",
    marginTop: "40px"
  }
}));

export default function TextBarSm() {
  const classes = useStyles();
  return (
    <Grid container item className={classes.root}>
      <Box component="span" display="block">
        <Typography variant="body1">A quick word from our sponsors:</Typography>
      </Box>
      <Box component="span" display="block">
        {" "}
      </Box>{" "}
      <Link href="#">The Easy Way To Message</Link>
    </Grid>
  );
}
