import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar';
import TemporaryDrawer from './TemporaryDrawer';
import SearchBar from './SearchBar';
import Language from './Language';
import  InvertColorsIcon  from './InvertColors';
import NotificationsIcon from './NotificationIcon';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHub from './GitHub';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
 
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
       <Toolbar>
         <TemporaryDrawer />
         <SearchBar />
         <Language />
         <Box mx={1}><InvertColorsIcon /></Box>
         <Box mx={1}> <Brightness7Icon /> </Box> 
         <Box mx={1}><NotificationsIcon /> </Box>
         <Box mx={1}><GitHub /></Box>
       </Toolbar>
       
      </AppBar>
    </div>
  );
}