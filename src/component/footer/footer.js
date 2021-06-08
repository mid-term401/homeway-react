import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  root: {
    marginTop: 100,
    height: 310,
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/landing-img-16a.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  txt: {
    textAlign: "center",
    marginTop: 25,
  },

  Icon: {
    color: "#c48354",

  },

  Font:
  {
    fontFamily: 'Lobster, cursive',
    color: "#ebd3c2",
    marginTop: 30,
    textShadow:"2px 2px black",

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const preventDefault = (event) => event.preventDefault();

  return (
    <BottomNavigation value={value} showLabels className={classes.root}>
      <Container>

        <Grid className={classes.txt} container item xs={12} sm={12} md={12} >

          <Grid container item xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={3} md={3}>

              <Typography className={classes.Font} variant="h6" gutterBottom>
                <Link href="#" style={{ color: "#c48354" }} onClick={preventDefault}>
                  Home
                  </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={9} md={3}>

              <Typography className={classes.Font} variant="h6" gutterBottom>
                <Link href="#" style={{ color: "#c48354" }} onClick={preventDefault}>
                  Services
                  </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={9} md={3}>

              <Typography className={classes.Font} variant="h6" gutterBottom>
                <Link href="#" style={{ color: "#c48354" }} onClick={preventDefault}>
                  Sign Up
                  </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={9} md={3}>

              <Typography className={classes.Font} variant="h6" gutterBottom>
                <Link href="#" style={{ color: "#c48354"}} onClick={preventDefault}>
                  Login
                  </Link>
              </Typography>
            </Grid>

          </Grid>
          <Grid container style={{ backgroundColor: "#edcdb6", height: 1, marginTop: 30 }} item xs={12} sm={12} md={12}>
          </Grid>
          {/* <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Typography className={classes.Font} variant="h6" gutterBottom >
              About Website
                  </Typography>
            <Typography justify="center" alignItems="center" className={classes.Font} variant="h6" gutterBottom >
              To be the best quick service restaurant experience. Being the best means providing
              outstanding quality, service, cleanliness and value, so that we make every customer.
                  </Typography>

          </Grid> */}

        </Grid>

        {/* <Grid container style={{ backgroundColor: "white", height: 1, marginTop: 30 }} item xs={12} sm={12} md={12}>
        </Grid> */}

        <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
        <Typography className={classes.Font} variant="h6" gutterBottom >
          CONTACT US ON
        </Typography>
        </Grid>

        <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12} >
          <Grid justify="center" alignItems="center" spacing={6} className={classes.txt} container item xs={3} sm={2} md={1}>
            <FacebookIcon className={classes.Icon} fontSize="large" />
          </Grid>

          <Grid justify="center" alignItems="center" spacing={6} className={classes.txt} container item xs={3} sm={2} md={1}>
            <GitHubIcon className={classes.Icon} fontSize="large" />
          </Grid>

          <Grid justify="center" alignItems="center" spacing={6} className={classes.txt} container item xs={3} sm={2} md={1}>
            <EmailIcon className={classes.Icon} fontSize="large" />
          </Grid>

          <Grid justify="center" alignItems="center" spacing={6} className={classes.txt} container item xs={3} sm={2} md={1}>
            <LinkedInIcon className={classes.Icon} fontSize="large" />
          </Grid>
        
        </Grid>
        <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
        <Typography className={classes.Font} variant="h6" gutterBottom >
           &copy; Copyright Reserverd 2021 
        </Typography>
        </Grid>

      </Container>
    </BottomNavigation>
  );
}
