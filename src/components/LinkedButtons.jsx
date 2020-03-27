import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import StarIcon from "@material-ui/icons/Star";
import Tooltip from "@material-ui/core/Tooltip";

export default function SplitButton() {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid container justify="center" item xs={6}>
        <ButtonGroup
          size="small"
          aria-label="split button"
          style={{ maxHeight: "30px" }}
        >
          <Button startIcon={<StarIcon />}>Star</Button>

          <Button color="primary" size="small">
            55,781
          </Button>
        </ButtonGroup>

        <Tooltip
          title="9,409 followers"
          open
          arrow
          placement="right"
          style={{ maxHeight: "30px", marginLeft: "15px" }}
        >
          <Button color="primary" variant="contained">
            Twitter
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
