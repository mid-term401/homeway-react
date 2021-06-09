import React from "react";
import emailjs from "emailjs-com";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({

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

  text:{
    borderRadius: 5,
    background:'none',
     rows:4,
     col:100, 
     marginBottom: 30,
    fontSize:15
  
  },
  submit: {
      borderRadius: 5, 
    },

    box: {
      backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
      borderRadius: 4,
      marginBottom: "20px",
      marginTop:75,
      width:500


    },

  Font:
{
  fontFamily: 'Lobster, cursive',
  color: "#FB8C00",
  textAlign:"center",
  marginBottom: 30
},
container:{
  
},
button: {
    
  width: "135px",
  padding: 10,
  marginTop: 0,
  background: '#FB8C00',
  color: "white",
  height: 40

},




}));


export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ubvgdz4",
        "template_i8prkaq",
        e.target,
        "user_dncOf0N71yVFqKUwhCpmT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const classes = useStyles();


  return (
    <>
      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
    <Container className={classes.container} className={classes.box} >
    
      <img src="https://www.fresh-flow.co.uk/wp-content/uploads/2016/08/FreshFlow-Orange-Petal-Email.png" alt="" className={classes.image}  />
     
    <Grid container spacing={4} >
        <Grid
         container
         direction="row"
         
        
             item xs={12} sm={12} md={12}
            >
               <Typography  className={classes.Font} variant="h6" gutterBottom >
               How can we help you
                </Typography>
                        <br />

                
      
  
             
              <Grid spacing={2} container item xs={12} sm={12} md={12} className={classes.submit} > 
                <Grid container item xs={12} sm={12} md={12} className={classes.submit} >
                <TextField required id="from_name" name="from_name" label="Your Name" fullWidth variant="outlined" className={classes.Root}/>
               </Grid>
               </Grid>
               
               <Grid style={{marginTop:5}} spacing={2} container item xs={12} sm={12} md={12} className={classes.submit}>
                <Grid container item xs={12} sm={12} md={12} className={classes.submit}>
                <TextField required id="sender_email" name="sender_email" label="Your Email" fullWidth variant="outlined" className={classes.Root}/>
               </Grid>   
               </Grid>
               <Grid style={{marginTop:5}} spacing={2} container item xs={12} sm={12} md={12} className={classes.submit}>
                <Grid container item xs={12} sm={12} md={12} className={classes.submit}>
                <TextField id="subject" name="subject" label="Topic" fullWidth variant="outlined" className={classes.Root}/>
               </Grid>
               </Grid>
               
               
               <Grid style={{marginTop:5}} spacing={2} container item xs={12} sm={12} md={12} className={classes.submit}>
                <Grid container item xs={12} sm={12} md={12} className={classes.submit}>
                <textarea required   background="#FB8C00" rows="10" cols="100" name="message" placeholder='Message...' className={classes.text} />
               </Grid>
               </Grid>
               


        
        
               <Grid spacing={8} container item xs={12} sm={12} md={12} className={classes.submit} >
               <Grid container item xs={12} sm={12} md={4} className={classes.submit} >
             <Button type="submit" variant="contained"
               className={classes.button}>
               Send
             </Button>
             </Grid>
           
             </Grid>

      </Grid>
      </Grid>
      </Container>
      </form>
     
    </>
  );
}
