import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import LanguageIcon from "@material-ui/icons/Language";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(() => ({
  submit: {
    backgroundColor: "white",
    borderRadius: 4,
   
  },

  button: {
    width: "135px",
    padding: 10,
    marginTop:10,
    background: '#FB8C00',
    color:"white"
   
  },
  
  icon: {
    color: "#FB8C00",
    marginLeft: 30,
  },

  root: {
    display: "flex",
    width: "auto",
    marginTop: 15,
    // border:"2px solid",
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`
  },

  cover: {
    width: 300,
    height: "200px",
  },

  card: {
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 4,
    display: "block",
    
   
  },

  grid:
  {
    height: 110,
    marginTop: 50
  },

  description:
  {
    // border:"2px solid",
    marginTop: "20px",
    borderRadius: 3,
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`

    
  },

  font:
  {
    fontFamily: 'Lobster, cursive',
  },

  review:
  {
    fontFamily: 'Lobster, cursive',
    padding:"20px",
    
  },

  skills:
  {
    fontFamily: 'Lobster, cursive',
    textAlign:"center"
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid container spacing={6}>
          <Grid
            container item xs={12} sm={12} md={12}
            className={classes.submit}
          >
            <Grid item xs={12} sm={6} md={3}>
              <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"></img>
            </Grid>
            <Grid container item xs={12} sm={6} md={9} className={classes.grid}>

              <Grid item xs={12} sm={6} md={1} >
                <PersonIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={11}>
                <Typography  className={classes.font} variant="h6" gutterBottom >
                  Jack Wandrason
                </Typography>

              </Grid>

              <Grid item xs={12} sm={6} md={1}>
                <EmailIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={11}>
                <Typography className={classes.font} variant="h6" gutterBottom >
                   jack.wandrason88@gmail.com
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={1} >
                <PublicIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={11}>
                <Typography className={classes.font} variant="h6" gutterBottom >
                Australia
                </Typography>

              </Grid>

              <Grid item xs={12} sm={6} md={1} >
                <LanguageIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={9}>
                <Typography className={classes.font} variant="h6" gutterBottom >
                  English
                </Typography>

              </Grid>
              <Grid item xs={12} sm={6} md={2}>
              <Button variant="h6"type="submit" variant="contained" 
            className={classes.button}> 
            Edit profile
          </Button>
          </Grid>
            </Grid>

            <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={10} spacing={5} className={classes.description}>

            <Typography className={classes.font} variant="h6" style={{ color: "#FB8C00" }}>
                  About Me:
                </Typography>
              Hardworker, Cabiblaty on heal anything heavy, Collaborative
              Hardworker, Cabiblaty on heal anything heavy, Collaborative
            </Grid>
           
          
          </Grid>
          </Grid>

          <Grid container spacing={0} item xs={12} sm={12} md={12} className={classes.card}>
            <Typography style={{ color: "#FB8C00" }} className={classes.font} variant="h6" gutterBottom>
              Preview:
            </Typography>

            <Typography className={classes.review} variant="h6" gutterBottom>

            Become part of Social work in the USA. Take part in a 6 months, intensive Volunteer
             program with studies, courses and actions with people from all over the world;
              work in poor communities to improve healthy living, establishing organic gardens 
              and do what is needed with organizations working for the common good such as 
              teaching in after school programs and more.This program is for all who want to
               team up in an effort to learn in theory and praxis about running non-profits,
                and get a sense of what it takes to become a community leader, while gaining
                 knowledge working in the midst of a poor community.

            </Typography>

            <Typography className={classes.font} style={{ color: "#FB8C00" }} variant="h6" gutterBottom>
              Skills:
            </Typography>

            <Grid container className={classes.review} item xs={12} sm={12} md={12}>
            <Grid className={classes.review} item xs={12} sm={3} md={3}>
              <img src="https://d3timt52sxdbq0.cloudfront.net/wp-content/uploads/2019/05/project-collaboration.jpg"></img>

              <Typography className={classes.skills} variant="h6" gutterBottom>
              Collaborative Person
            </Typography>
            </Grid>

            <Grid className={classes.review} item xs={12} sm={9} md={3}>
            <img src="https://www.careercontessa.com/uploadedImages/Library/career-contesa-work-smarter4.jpg"></img>

             <Typography className={classes.skills} variant="h6" gutterBottom>
              Hard Worker
              </Typography>
              </Grid>

              <Grid className={classes.review} item xs={12} sm={9} md={3}>
            <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_829578104_200013331653767174292_382164.jpg"></img>

             <Typography className={classes.skills} variant="h6" gutterBottom>
             Creativity
              </Typography>
              </Grid>

              <Grid className={classes.review} item xs={12} sm={9} md={3}>
            <img src="https://youmatter.world/app/uploads/sites/2/2019/01/responsibility-definition.jpg"></img>

             <Typography className={classes.skills} variant="h6" gutterBottom>
              Responsible
              </Typography>
              </Grid>
            
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
