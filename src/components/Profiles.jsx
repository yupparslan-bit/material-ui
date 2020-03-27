import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8),
    display: "flex",
    ["@media screen and (min-device-width : 320px) and (max-device-width : 1024px)"]: {
      display: "block",
      width: "100%"
    }
  },
  media: {
    paddingTop: "56.25%" // 16:9
  },

  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Profiles() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Grid item xs={12} md={4} style={{ padding: "8px" }}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="Twitter">
                  <TwitterIcon style={{ color: "#468CD3" }} />
                </IconButton>
              }
              title="Mohammad Al Aydi"
              subheader="@Mohammadalaydi"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "8px" }}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  M
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <TwitterIcon style={{ color: "#468CD3" }} />
                </IconButton>
              }
              title="Mathhis Magot"
              subheader="@mathhismagot123"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "8px" }}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <TwitterIcon style={{ color: "#468CD3" }} />
                </IconButton>
              }
              title="Rodrigo Ciprian"
              subheader="@rodrigociprian"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Container>
      <Divider variant="middle" />
    </React.Fragment>
  );
}
