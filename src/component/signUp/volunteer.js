import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { postRemoteData } from "../../store/actions/thunk-action";
import { checkUserType } from "../../store/actions/acl-action";
import { useSelector, useDispatch } from "react-redux";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 640,
    marginLeft: "-1px",
  },

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
    marginTop: "30px",
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

    '&:hover': {
      backgroundColor: 'white',
      color: '#FB8C00',
    }

  },


}));

function Profile() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const [selectedDateTo, setselectedDateTo] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const dispatch = useDispatch();

  function SubmitSignInForm(e) {
    e.preventDefault();

    dispatch(
      postRemoteData(
        "https://robust-entity-homeway.herokuapp.com/volunteers/sign_up",
        {
          username: e.target.username.value,
          password: e.target.password.value,
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          email: e.target.email.value,
          country: e.target.country.value,
          address: e.target.address.value,
          birth_date: e.target.birthdate.value,
        },
        ""
      )
    );
  }

  const handleDateChangeTo = (date) => {
    setselectedDateTo(date);
  };
  return (
    <>
      <Container>
        <Grid container spacing={8}>
          <Grid container item xs={12} sm={12} md={12} className={classes.box}>
            <Typography className={classes.Font} variant='h5' gutterBottom>
              Sign Up as Volunteer
            </Typography>
            <form Validate onSubmit={SubmitSignInForm} className={classes.form}>
            <Grid container spacing={3} >
          <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='Username'
                    name='username'
                    label='Username'
                    fullWidth
                    variant='outlined'
                    className={classes.Root}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='Password'
                    name='password'
                    label='Password'
                    fullWidth
                    variant='outlined'
                    className={classes.Root}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} >
              <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='First Name'
                    name='first_name'
                    label='First Name'
                    fullWidth
                    variant='outlined'
                    className={classes.Root}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='Last Name'
                    name='last_name'
                    label='Last Name'
                    fullWidth
                    variant='outlined'
                    className={classes.Root}
                  />
                </Grid>
                </Grid>

                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id='Email'
                    name='email'
                    label='Email'
                    fullWidth
                    variant='outlined'
                    className={classes.Root}
                  />
                </Grid>
                

               
                <Grid item xs={12} sm={6}>
                  <TextField
                    id='Address'
                    name='address'
                    label='Address'
                    fullWidth
                    variant='outlined'
                    className={classes.Root}
                  />
                </Grid>
                </Grid>

               

                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id='Country'
                    name='country'
                    label='Country'
                    fullWidth
                    variant='outlined'
                    className={classes.Root}
                  />
                </Grid>
                


                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item sm={6}>
                    <KeyboardDatePicker
                      style={{ marginLeft: "10px", width: "100%" }}
                      variant='outlined'
                      margin='normal'
                      id='date-picker-dialog'
                      name='birthdate'
                      label='Birth Date'
                      format='MM-dd-yyyy'
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                </Grid>

              <Grid
                style={{ marginTop: 60 }}
                spacing={2}
                container
                item
                xs={12}
                sm={12}
                md={12}
                className={classes.grid}
              >
                <Grid container item xs={12} sm={12} md={8} className={classes.submit}></Grid>
                <Grid container item xs={12} sm={12} md={2} className={classes.submit}>
                  <Button type='submit' variant='contained' className={classes.button}>
                    Submit
                  </Button>
                </Grid>

                <Grid container item xs={12} sm={12} md={2} className={classes.submit}>
                  <Button variant='h6' type='submit' variant='contained' className={classes.button}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>

              <Grid spacing={2} container item xs={12} sm={12} md={12} className={classes.grid}>
          <Grid container item xs={12} sm={12} md={8} className={classes.submit} >
            
            </Grid>
            
          <Grid  justify='center' alignItems='center' container item xs={12} sm={12} md={4} className={classes.submit} >
          <Link style={{ marginTop: 20 }} href='#' to='/' variant='body2'>
                Already have an account? Sign in
              </Link>
          </Grid>
          </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return { signUp: state.thunkReducer };
};
const mapDispatchToProps = { postRemoteData, checkUserType };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
