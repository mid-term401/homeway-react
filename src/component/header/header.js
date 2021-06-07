import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    width: "100",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <Container>
    //   <Grid container spacing={4}>
    <div className={classes.root}>
      <AppBar className='navBar' position='absolute'>
        <Toolbar>
          <Typography variant='h3' className='logoName'>
            Home Way
          </Typography>
          {auth ? (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle fontSize='large' />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          ) : (
            <Grid className='loginBar' container>
              <Grid item xs={12} sm={2} md={6}></Grid>
              <Grid item xs={4} sm={2} md={5}>
                <ul>
                  <li>
                    <NavLink exact to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/LogIn'>LogIn</NavLink>
                  </li>
                  <li>
                    <NavLink to='/aboutUs'>AboutUs</NavLink>
                  </li>
                </ul>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label='login switch' />}
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
    </div>
    //   </Grid>
    // </Container>
  );
}
