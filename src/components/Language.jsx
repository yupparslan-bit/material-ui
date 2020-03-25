import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';

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
      <Button aria-controls="simple-menu" aria-haspopup="true" style={{color:'white'}} onClick={handleClick}>
        <TranslateOutlinedIcon />       
        English
        <ExpandMoreOutlinedIcon />
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
      </Menu>
    </div>
  );
}