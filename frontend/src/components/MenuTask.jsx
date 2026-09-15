import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/TaskCard.css';

function MenuTask({onDelete,onModify,task}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handeleSuppr = () => {
      handleClose();
      onDelete();
    };

    const handleModify = () => {
      handleClose();
      onModify();
    };

  return (
     <div>

      <img
        className="task-icon" 
        src="\src\assets\menu-dots.png" 
        alt="Modifer"
        id="demo-positioned-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div>
          <MenuItem onClick={handleModify} >
              <img src="\src\assets\edit.png" className='menu-icon' />
              <div className='sub-title'>
                  Modifier
              </div>
          </MenuItem>
        </div>

        <MenuItem onClick={handeleSuppr} >
            <img src="\src\assets\delete.png" className='menu-icon' />
            <div className='sub-title'>
                Supprimer
            </div>
        </MenuItem>
      </Menu>
      
    </div>
  );
}

export default MenuTask