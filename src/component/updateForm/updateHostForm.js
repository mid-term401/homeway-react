import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import superagent from "superagent";
import { NavLink } from "react-router-dom";
import cookie from "react-cookies";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  Root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& label.Mui-focused": {
      color: "#FB8C00",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },

  Submit: {
    borderRadius: 5,
  },

  box: {
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
    borderRadius: 4,
    marginBottom: "20px",
  },

  Font: {
    fontFamily: "Lobster, cursive",
    color: "#FB8C00",
    textAlign: "center",
    marginBottom: 30,
  },

  button: {
    width: "135px",
    padding: 10,
    marginTop: 10,
    background: "#FB8C00",
    color: "white",
    height: 40,
  },
}));

export default function UpdateProfile() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [selectedDateTo, setselectedDateTo] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChangeTo = (date) => {
    setselectedDateTo(date);
  };

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const state = useSelector((state) => {
    return {
      userData: state.loggin,
      thunkReducer: state.thunkReducer,
    };
  });

  function loadProfile() {
    superagent
      .get(
        `https://robust-entity-homeway.herokuapp.com/host/${state.userData.id}`
      )
      .set("authorization", `${state.userData.cookie}`)
      .then((response) => {
        cookie.save("profileData", response.body);
        setUser(cookie.load("profileData"));
        // console.log(1111111111111, response.body);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (state.userData.loggedIn) {
      loadProfile();
    }
  }, [state.userData.loggedIn]);

  function updateDataBase(e) {
    e.preventDefault();

    // console.log(333333333333333, newData);

    if (state.userData.loggedIn) {
      let newData = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        user_name: document.getElementById("user_name").value,
        description: document.getElementById("description").value,
        country: document.getElementById("country").value,
        birth_date: document.getElementById("birth_date").value,
        address: document.getElementById("address").value,
        rating: user[0].rating,
        profile_image: document.getElementById("profile_image").value,
        id: user[0].id,
        passport: user[0].passport,
        password: user[0].password,
        email: document.getElementById("email").value,
      };
      console.log(state.userData.cookie);
      update(newData);
    }
  }

  function update(newData) {
    superagent
      .put(
        `https://robust-entity-homeway.herokuapp.com/host/${state.userData.id}`
      )
      .set("authorization", state.userData.cookie)
      .send(newData)
      .then((response) => {
        cookie.save("profileData2", response.body);
        console.log("Here is the updated data", response.body);
        setUser(cookie.load("profileData2"));
        setLoading(false);
      })
      .catch((error) => {
        console.log("error in updating value", error);
      });
  }

  if (!loading) {
    return (
      <>
        <form onSubmit={updateDataBase}>
          <Container>
            <Grid container spacing={8}>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.box}
              >
                <Typography className={classes.Font} variant="h6" gutterBottom>
                  Update your information
                </Typography>

                <Grid
                  spacing={2}
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.Submit}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.Submit}
                  >
                    <TextField
                      required
                      id="user_name"
                      name="user_name"
                      label="Username"
                      fullWidth
                      variant="outlined"
                      className={classes.Root}
                      defaultValue={user[0].user_name}
                    />
                  </Grid>

                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.Submit}
                  >
                    <TextField
                      required
                      defaultValue={"****"}
                      id="password"
                      name="password"
                      label="Password"
                      fullWidth
                      variant="outlined"
                      // defaultValue={user.password}
                      className={classes.Root}
                    />
                  </Grid>
                </Grid>

                <Grid
                  style={{ marginTop: 20 }}
                  spacing={2}
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.Submit}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.Submit}
                  >
                    <TextField
                      id="first_name"
                      name="first_name"
                      label="First Name"
                      fullWidth
                      variant="outlined"
                      defaultValue={user[0].first_name}
                      className={classes.Root}
                    />
                  </Grid>

                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.Submit}
                  >
                    <TextField
                      id="last_name"
                      name="last_name"
                      label="Last Name"
                      fullWidth
                      variant="outlined"
                      className={classes.Root}
                      defaultValue={user[0].last_name}
                    />
                  </Grid>
                </Grid>

                <Grid
                  style={{ marginTop: 20 }}
                  spacing={2}
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.submit}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.submit}
                  >
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                      className={classes.Root}
                      defaultValue={user[0].email}
                    />
                  </Grid>

                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.submit}
                  >
                    <TextField
                      id="address"
                      name="address"
                      label="Address"
                      fullWidth
                      variant="outlined"
                      defaultValue={user[0].address}
                      className={classes.Root}
                    />
                  </Grid>
                </Grid>

                <Grid
                  style={{ marginTop: 20 }}
                  spacing={2}
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.submit}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.submit}
                  >
                    <TextField
                      id="country"
                      name="country"
                      label="Country"
                      fullWidth
                      variant="outlined"
                      className={classes.Root}
                      defaultValue={user[0].country}
                    />
                  </Grid>

                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.submit}
                  >
                    <TextField
                      id="profile_image"
                      name="profile_image"
                      label="Profile Image URL"
                      fullWidth
                      variant="outlined"
                      className={classes.Root}
                    />
                  </Grid>
                </Grid>

                <Grid
                  style={{ marginTop: 20 }}
                  spacing={2}
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.submit}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.submit}
                  >
                    <TextField
                      id="description"
                      name="description"
                      label="Description"
                      fullWidth
                      variant="outlined"
                      className={classes.Root}
                      defaultValue={
                        user.description ? user.description : "No description yet"
                      }
                    />
                  </Grid>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item sm={6}>
                      <KeyboardDatePicker
                        style={{ marginLeft: "10px", width: "100%" }}
                        variant="outlined"
                        margin="normal"
                        id="birth_date"
                        name="birth_date"
                        label="Birth Date"
                        format="MM-dd-yyyy"
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid
                  style={{ marginTop: 20 }}
                  spacing={2}
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.grid}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={8}
                    className={classes.submit}
                  ></Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={2}
                    className={classes.submit}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </Grid>

                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={2}
                    className={classes.submit}
                  >
                    <Button
                      variant="h6"
                      type="submit"
                      variant="contained"
                      className={classes.button}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </form>
      </>
    );
  } else {
    return (
      <>
        <p>Loading ........</p>
      </>
    );
  }
}
