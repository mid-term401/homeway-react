import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="loginBar signup_button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style ={{display:"inline", fontSize:"medium", textDecoration:"none"}}
      >
        Sign up
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/hosts/sign_up">
            Host
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink exact to="/volunteers/sign_up">
            volunteer
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
