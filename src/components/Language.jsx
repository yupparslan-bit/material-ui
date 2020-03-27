import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import  Divider  from '@material-ui/core/Divider';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function Language() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       <TranslateIcon />
        English
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>French</MenuItem>
        <MenuItem onClick={handleClose}>Spanish</MenuItem>
        <MenuItem onClick={handleClose}>Arabic</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Help to Translate</MenuItem>
      </Menu>
    </div>
  );
}