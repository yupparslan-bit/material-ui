import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file" spacing={10}>
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <ButtonGroup variant="outlined" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
      </ButtonGroup>
  
      </Grid>
    </div>
  );
}