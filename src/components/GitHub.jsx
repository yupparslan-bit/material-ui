import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    color: "white",
    marginRight: "2px"
  }
});

export default function GitHub() {
  const classes = useStyles();
  return (
    <Link href="#">
      {" "}
      <GitHubIcon className={classes.root} />{" "}
    </Link>
  );
}
