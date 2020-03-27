import React from "react";
import { CardMedia } from "@material-ui/core";
import ImageTwo from "../assets/image2.jpg";
import ImageThree from "../assets/image3.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageFour from "../assets/image4.png";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(2)
    }
  }
}));

export default function SmallImages() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        Container
        direction="row"
        justify="center"
        alignItems="center"
        item
        className={classes.root}
        xs={12}
        style={{
          marginBottom: "25px",
          marginTop: "35px"
        }}
      >
        <CardMedia
          image={ImageTwo}
          style={{ width: "70px", height: "70px" }}
        ></CardMedia>

        <CardMedia
          image={ImageThree}
          style={{ width: "70px", height: "70px" }}
        ></CardMedia>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
        xs={12}
      >
        <CardMedia
          image={ImageFour}
          style={{ width: "140px", height: "140px" }}
        ></CardMedia>
      </Grid>
      <Grid item>
        <Typography variant="h4" align="center" style={{ marginTop: "25px" }}>
          There are more!
        </Typography>
      </Grid>
      <Grid item style={{ marginBottom: "40px" }}>
        <Typography
          variant="body1"
          align="center"
          style={{ marginTop: "10px" }}
        >
          See the full list of{" "}
          <Link href="#" style={{ color: "red" }}>
            {" "}
            our sponsors,
          </Link>{" "}
          and learn how you can contribute to the future of Material-UI.
        </Typography>
      </Grid>
      <Divider variant="middle" style={{ marginTop: "40px" }} />
    </React.Fragment>
  );
}
