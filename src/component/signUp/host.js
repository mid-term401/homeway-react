import React from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { postRemoteData } from "../../store/actions/thunk-action";
import { checkUserType } from "../../store/actions/acl-action";

import { useSelector, useDispatch } from "react-redux";

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
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
    },
    '& label.Mui-focused': {
        color: '#FB8C00',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
},

submit: {
    borderRadius: 5, 
  },

  box: {
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
    borderRadius: 4,
    marginTop: "30px",
  },

Font:
{
fontFamily: 'Lobster, cursive',
color: "#FB8C00",
textAlign:"center",
marginBottom: 30
},

button: {
  
width: "135px",
padding: 10,
marginTop: 10,
background: '#FB8C00',
color: "white",
height: 40,
'&:hover': {
  backgroundColor: 'white',
  color: '#FB8C00',
}

},

}));

function AddressForm(props) {
  // props.checkUserType("host");
  const dispatch = useDispatch();
  function SubmitSignInForm(e) {
    e.preventDefault();

    dispatch(
      postRemoteData(
        "https://robust-entity-homeway.herokuapp.com/hosts/sign_up",
        {
          username: e.target.username.value,
          password: e.target.password.value,
          first_name: e.target.firstname.value,
          last_name: e.target.lastname.value,
          email: e.target.email.value,
          country: e.target.country.value,
          address: e.target.address.value,
          birth_date: e.target.birthdate.value,
        },
        ""
      )
    );
  }

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // const [role, setRole] = React.useState('');

  // const handleChange = (event) => {
  //     setRole(event.target.value);
  // };

  return (
    <Container >
        <Grid container spacing={8} >
        <Grid container item xs={12} sm={12} md={12} className={classes.box}>
      <Typography variant='h5' gutterBottom className={classes.Font}>
        Sign Up as Host
      </Typography>
      <form Validate onSubmit={SubmitSignInForm}>
        <Grid container spacing={3} style={{ marginTop: "60px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='userName'
              name='username'
              label='User Name'
              fullWidth
              autoComplete='username'
              variant='outlined'
              className={classes.Root}
              // onChange={(e) => { setUserNameReg(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='password'
              name='password'
              label='password'
              fullWidth
              autoComplete='new-password'
              type='password'
              variant='outlined'
              className={classes.Root}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstname'
              label='First name'
              fullWidth
              autoComplete='given-name'
              variant='outlined'
              className={classes.Root}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastname'
              label='Last name'
              fullWidth
              autoComplete='family-name'
              variant='outlined'
              className={classes.Root}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              className={classes.Root}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='address'
              name='address'
              label='Address'
              fullWidth
              // autoComplete="address-line1"
              variant='outlined'
              className={classes.Root}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid> */}

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='country'
              name='country'
              label='Country'
              fullWidth
              autoComplete='shipping country'
              variant='outlined'
              className={classes.Root}
            />
          </Grid>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item sm={5}>
              <KeyboardDatePicker
                style={{ marginLeft: "10px", width: "590px" }}
                variant='outlined'
                id='date-picker-dialog'
                name='birthdate'
                label='Birth Date'
                format='MM-dd-yyyy'
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className={classes.Root}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid style={{marginTop:20}} spacing={2} container item xs={12} sm={12} md={12} className={classes.grid}>
          <Grid container item xs={12} sm={12} md={9} className={classes.submit} >
            
            </Grid>
            
          <Grid container item xs={12} sm={12} md={3} className={classes.submit} >
          <Link style={{ color: "white" }} href='#'>
            <Button type='submit' variant='contained' color='primary' className={classes.button}>
              Sign Up
            </Button>
          </Link>
          </Grid>
          </Grid>
          <Grid spacing={2} container item xs={12} sm={12} md={12} className={classes.grid}>
          <Grid container item xs={12} sm={12} md={9} className={classes.submit} >
            
            </Grid>
            
          <Grid  justify='center' alignItems='center' container item xs={12} sm={12} md={3} className={classes.submit} >
          <Link href='#' to='/' variant='body2'>
                Already have an account? Sign in
              </Link>
          </Grid>
          </Grid>
         
        </Grid>
      </form>
      </Grid>
        </Grid>
      </Container>
  );
}

const mapStateToProps = (state) => {
  return { signUp: state.thunkReducer };
};
const mapDispatchToProps = { postRemoteData, checkUserType };

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
