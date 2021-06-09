import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import handleClick from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import SimpleMenu from "./menu";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { toggleOpen, loggout, getRoutId } from "../../store/actions/loggin-action";
import { checkCookie } from "../../store/actions/acl-action";

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
  sign_up: {},
}));

function MenuAppBar(props) {
  console.log("🚀🚀🚀🚀🚀head🚀🚀🚀🚀🚀🚀🚀", props);
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const state = useSelector((state) => {
    return {
      userData: state.loggin,
      thunkReducer: state.thunkReducer,
    };
  });
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className='navBar' position='relative'>
        <Toolbar>
          <Typography variant='h1' className='logoName'>
            <img
              src='./logo-2.png'
              style={{
                width: 200,
                borderRadius: 100,
                position: "absolute",
                top: -65,
              }}
            />
          </Typography>
          {props.userData.loggedIn ? (
            <div
              style={{
                width: 800,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <span style={{ display: "flex", width: 350, marginTop: 12 }}>
                <NavLink exact to='/'>
                  Home
                </NavLink>
                {/* <NavLink
                  to="/L"
                  onClick={() => {
                    props.toggleOpen(false);
                    props.checkCookie();
                  }}
                >
                  LogIn
                </NavLink> */}
                <NavLink to='/aboutUs'>AboutUs</NavLink>
              </span>

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
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to={`/Profile/${props.userData.id}`}
                    onClick={() => {
                      dispatch(getRoutId(props.userData.id));
                    }}
                  >
                    Profile
                  </NavLink>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    props.loggout();
                  }}
                >
                  <NavLink to='/'>Log out</NavLink>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Grid className='loginBar' container>
              <Grid item xs={8} sm={2} md={5}></Grid>
              <Grid item xs={4} sm={10} md={7} container style={{ justifyContent: "space-evenly" }}>
                <Grid>
                  <NavLink exact to='/'>
                    Home
                  </NavLink>
                </Grid>
                <Grid>
                  <SimpleMenu className='loginTitle' />
                </Grid>
                <Grid>
                  <NavLink
                    to='/L'
                    onClick={() => {
                      props.toggleOpen(false);
                      props.checkCookie();
                    }}
                  >
                    LogIn
                  </NavLink>
                </Grid>

                <Grid>
                  <NavLink to='/aboutUs'>AboutUs</NavLink>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.loggin };
};
const mapDispatchToProps = { toggleOpen, checkCookie, loggout };

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);
