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
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "white",
    borderRadius: 4,

  },

  button: {
    width: "135px",
    padding: 10,
    marginTop: 10,
    background: '#FB8C00',
    color: "white",
    height: 40

  },

  icon: {
    color: "#FB8C00",
    marginLeft: 45,
  },

  root: {
    display: "flex",
    width: "100%",
    marginTop: 15,
    // border:"2px solid",
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`
  },

  cover: {
    width: 300,
    height: "200px",
  },

  Card: {
    backgroundColor: "white",
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

    width: "100%",
    marginTop: "20px",
    borderRadius: 3,
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`


  },

  font:
  {
    fontFamily: 'Lobster, cursive'
  },

  About:
  {
    width: "100%",
    padding: 15
  },

  rating: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      // marginTop: theme.spacing(2),
    },
    marginLeft: 50,
    marginTop: 10
  },

  image:
  {
    width: "100%",
    height: "100%",
    borderRadius: "3px"
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
              <img className={classes.image} src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"></img>
            </Grid>
            <Grid container item xs={12} sm={6} md={6} className={classes.grid}>

              <Grid item xs={12} sm={6} md={2} >
                <PersonIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={10}>
                <Typography className={classes.font} variant="h6" gutterBottom >
                  Jack Wandrason
                </Typography>

              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <EmailIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={10}>
                <Typography className={classes.font} variant="h6" gutterBottom >
                  jack.wandrason88@gmail.com
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={2} >
                <PublicIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={10}>
                <Typography className={classes.font} variant="h6" gutterBottom >
                  Australia
                </Typography>

              </Grid>

              <Grid item xs={12} sm={6} md={2} >
                <LanguageIcon fontSize="large" className={classes.icon} />
              </Grid>
              <Grid item xs={12} sm={6} md={9}>
                <Typography className={classes.font} variant="h6" gutterBottom >
                  English
                </Typography>

              </Grid>

              
              <Grid item xs={12} sm={6} md={2} >
              <div className={classes.rating}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>

              </Grid>
            </Grid>

            <Grid container item xs={12} sm={6} md={2} className={classes.grid}>
             
              <Button variant="h6" type="submit" variant="contained"
                className={classes.button}>
                Edit profile
              </Button>


            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} spacing={5} className={classes.description}>

                <Typography className={classes.font} variant="h5" className={classes.About} style={{ color: "#FB8C00" }}>
                  About Me:
                </Typography>
              Hardworker, Cabiblaty on heal anything heavy, Collaborative
              Hardworker, Cabiblaty on heal anything heavy, Collaborative
              Hardworker, Cabiblaty on heal anything heavy, Collaborative
              Hardworker, Cabiblaty on heal anything heavy, Collaborative

            </Grid>


            </Grid>
          </Grid>

          <Grid container spacing={0} item xs={12} sm={12} md={12} className={classes.Card}>
            <Typography className={classes.font} style={{ color: "#FB8C00" }} variant="h6" gutterBottom>
              Services:
            </Typography>

            <Grid container className={classes.submit}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image="https://www.marketplace.org/wp-content/uploads/2020/05/GettyImages-993512154-e1589912002555.jpg?fit=5038%2C2833"
                  title="Live from space album cover"
                />

                <CardContent className={classes.content}>
                  <Typography className={classes.font} component="h5" variant="h5">
                    Farmer
                </Typography>
                  <Typography className={classes.font} variant="subtitle1" color="textSecondary">
                    Details: We need a persion with physical skills that have a
                    capabilty to work prush.
                </Typography>

                  <Typography className={classes.font} variant="subtitle1" color="textSecondary">
                    Country: Australia
                </Typography>

                  <Typography className={classes.font} variant="subtitle1" color="textSecondary">
                    Duration: 6 Months
                </Typography>
                  <CardActions >
                    <Button size="small" style={{ color: "#FB8C00" }}>
                      Delete
                </Button>
                    <Button size="small" style={{ color: "#FB8C00" }}>
                      Edit
                </Button>
                  </CardActions>
                </CardContent>

              </Card>


            </Grid>


            <Grid container className={classes.submit}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image="https://luxurylaunches.com/wp-content/uploads/2021/02/Clothespin-Shaped-Skyscraper-Dubai-1170x650.jpg"
                  title="Live from space album cover"
                />

                <CardContent className={classes.content}>
                  <Typography className={classes.font} component="h5" variant="h5">
                    Build
                </Typography>
                  <Typography className={classes.font} variant="subtitle1" color="textSecondary">
                    Details: We need a persion with physical skills that have a
                    capabilty to work prush .
                </Typography>

                  <Typography className={classes.font} variant="subtitle1" color="textSecondary">
                    Country: Newyork
                </Typography>

                  <Typography className={classes.font} variant="subtitle1" color="textSecondary">
                    Duration: 1 year
                </Typography>
                  <CardActions >
                    <Button size="small" style={{ color: "#FB8C00" }}>
                      Delete
                </Button>
                    <Button size="small" style={{ color: "#FB8C00" }}>
                      Edit
                </Button>
                  </CardActions>
                </CardContent>

              </Card>


            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
