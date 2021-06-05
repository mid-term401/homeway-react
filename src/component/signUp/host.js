import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

  

const useStyles = makeStyles((theme) => ({
   
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width: "150px",
      marginTop: "30px",
      marginLeft: "600px"
      
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 640,
        marginLeft: "-1px"
      },
  }));

  
export default function AddressForm() {
    const classes = useStyles();
    
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    
  return (

    <div style={{ borderRadius: "10px", boxShadow: "0px 0px 100px 0px #3447BD", backgroundColor:"#f7f8f8cc", width:"1300px", padding:"20px", color:"#0c2644"}}>
      <Typography variant="h6" gutterBottom >
        Sign Up as Host 
      </Typography>
      <form Validate>
      <Grid container spacing={3} style={{marginTop:"60px"}}>
      <Grid item xs={12} sm={6}>
        <TextField
            required
            id="userName"
            name="username"
            label="User Name"
            fullWidth
            autoComplete="username"
            variant="outlined"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            
            required
            id="password"
            name="password"
            label="password"
            fullWidth
            autoComplete="new-password"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
         <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                
                
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address-line1"
            variant="outlined"
          />
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item sm={6}>
        
        <KeyboardDatePicker style={{marginLeft:"10px", width:"630px"}}
        variant="outlined"
          margin="normal"
          id="date-picker-dialog"
          label="Birth Date"
          format="MM/dd/yyyy"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',

          }
        } 
        />
        </Grid>
        </MuiPickersUtilsProvider>

        <Link style={{color:"white"}}href="#">
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
             
            Sign Up
          
          </Button>
          </Link>
          <Grid container justify="flex-start" style={{marginBottom:"15px"}}>
            <Grid item sm={12}>
              <Link href="#" to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        
      </Grid>
     
      </form>
    </div>
  );
}