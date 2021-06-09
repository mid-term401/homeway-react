import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

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

export default function Profile() {
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
  return (
    <>
      <Container>
        <Grid container spacing={8}>
          <Grid container item xs={12} sm={12} md={12} className={classes.box}>
            <Typography className={classes.Font} variant="h6" gutterBottom>
              Sign Up as Volunteer
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
                  id="Username"
                  name="Username"
                  label="Username"
                  fullWidth
                  variant="outlined"
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
                  required
                  id="Password"
                  name="Password"
                  label="Password"
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
                  id="First Name"
                  name="First Name"
                  label="First Name"
                  fullWidth
                  variant="outlined"
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
                  required
                  id="Last Name"
                  name="Last Name"
                  label="Last Name"
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
                  id="Email"
                  name="Email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  className={classes.Root}
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
                  id="Address"
                  name="Address"
                  label="Address"
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
                  id="Country"
                  name="Country"
                  label="Country"
                  fullWidth
                  variant="outlined"
                  className={classes.Root}
                />
              </Grid>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item sm={6}>
                  <KeyboardDatePicker
                    style={{ marginLeft: "10px", width: "100%" }}
                    variant="outlined"
                    margin="normal"
                    id="date-picker-dialog"
                    name="birthdate"
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
    </>
  );
}
