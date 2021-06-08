import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles} from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';




const useStyles = makeStyles((theme) => ({
    Submit: {
        borderRadius: 5, 
      },

      box: {
        backgroundImage: `url(${"https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/208336/1608841881_11292"})`,
        borderRadius: 4,
        marginTop: "70px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
       backgroundSize: "cover",
      },

    FontBasic:
  {
    fontFamily: 'Lobster, cursive',
    color: "black",
    textAlign:"center",
    marginBottom: 30
  },

  ProfileImage:
  {
    width: "80%",
    height: "80%",
    borderRadius: "50%",
    
  },

  Info:
  {
    fontFamily: 'Lobster, cursive',
    color: "black",
    textAlign:"center",
    marginTop: 10,
  },

  Social:
  {
    color: "#c48354",
  },
  
}));





export default function Profile() {
  const classes = useStyles();
  
  return (
    <>
      <Container >
        <Grid container spacing={10} >
        <Grid container item xs={12} sm={12} md={12} className={classes.box}>
        <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Typography style={{ color: "#FB8C00" }} className={classes.FontBasic} variant="h4" gutterBottom >
              We Are Robust Entity Team
                  </Typography>
            <Typography justify="center" alignItems="center" className={classes.FontBasic} variant="h6" gutterBottom >
                Our website is produce to you a multi service that's make you descover the world and
                try all types of works and same time provide to you the perfect help to your work by publishing 
                it on our website.
            </Typography>
          </Grid>

          <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Typography style={{ color: "black" }} className={classes.FontBasic} variant="h6" gutterBottom >
              Meet Our Team Members
            </Typography>
          </Grid>

          <Grid spacing={1}  justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
         
          <Grid justify="center" alignItems="center" container item xs={9} sm={6} md={2}>
          <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
          <img className={classes.ProfileImage} src="https://avatars.githubusercontent.com/u/75849120?v=4"></img>
              </Grid>
           
              <Grid justify="center" alignItems="center" container item xs={6} sm={9} md={12}>
              <Typography className={classes.Info} variant="h5" gutterBottom >
              Boshra Jaber
            </Typography>

            <Typography className={classes.Info} variant="h6" gutterBottom >
              Software Engineer
            </Typography>

            <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Grid justify="center" alignItems="center"  container item xs={3} sm={3} md={3}>
            <FacebookIcon className={classes.Social} fontSize="large" />
          </Grid>
          <Grid justify="center" alignItems="center" spacing={6} className={classes.logo} container item xs={6} sm={6} md={6}>
            <GitHubIcon className={classes.Social} fontSize="large" />
          </Grid>
              </Grid>
              </Grid>
           
          </Grid>


          <Grid justify="center" alignItems="center" container item xs={9} sm={6} md={2}>
          <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
          <img className={classes.ProfileImage} src="https://avatars.githubusercontent.com/u/44429186?v=4"></img>
              </Grid>
           
              <Grid justify="center" alignItems="center" container item xs={6} sm={9} md={12}>
              <Typography className={classes.Info} variant="h5" gutterBottom >
              Samer Alnajjar
            </Typography>

            <Typography className={classes.Info} variant="h6" gutterBottom >
              Software Engineer
            </Typography>

            <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Grid justify="center" alignItems="center"  container item xs={3} sm={3} md={3}>
            <FacebookIcon className={classes.Social} fontSize="large" />
          </Grid>
          <Grid justify="center" alignItems="center" spacing={6} className={classes.logo} container item xs={6} sm={6} md={6}>
            <GitHubIcon className={classes.Social} fontSize="large" />
          </Grid>
              </Grid>
              </Grid>
           
          </Grid>

          <Grid justify="center" alignItems="center" container item xs={9} sm={6} md={2}>
          <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
          <img className={classes.ProfileImage} src="https://avatars.githubusercontent.com/u/8080026?v=4"></img>
              </Grid>
           
              <Grid justify="center" alignItems="center" container item xs={6} sm={9} md={12}>
              <Typography className={classes.Info} variant="h5" gutterBottom >
              Ibrahim Jabr
            </Typography>

            <Typography className={classes.Info} variant="h6" gutterBottom >
              Software Engineer
            </Typography>

            <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Grid justify="center" alignItems="center"  container item xs={3} sm={3} md={3}>
            <FacebookIcon className={classes.Social} fontSize="large" />
          </Grid>
          <Grid justify="center" alignItems="center" spacing={6} className={classes.logo} container item xs={6} sm={6} md={6}>
            <GitHubIcon className={classes.Social} fontSize="large" />
          </Grid>
              </Grid>
              </Grid>
           
          </Grid>



          <Grid justify="center" alignItems="center" container item xs={9} sm={6} md={2}>
          <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
          <img className={classes.ProfileImage} src="https://avatars.githubusercontent.com/u/76435699?v=4"></img>
              </Grid>
           
              <Grid justify="center" alignItems="center" container item xs={6} sm={9} md={12}>
              <Typography className={classes.Info} variant="h5" gutterBottom >
              Haneen Atef
            </Typography>

            <Typography className={classes.Info} variant="h6" gutterBottom >
              Software Engineer
            </Typography>

            <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Grid justify="center" alignItems="center"  container item xs={3} sm={3} md={3}>
            <FacebookIcon className={classes.Social} fontSize="large" />
          </Grid>
          <Grid justify="center" alignItems="center" spacing={6} className={classes.logo} container item xs={6} sm={6} md={6}>
            <GitHubIcon className={classes.Social} fontSize="large" />
          </Grid>
              </Grid>
              </Grid>
           
          </Grid>

          <Grid justify="center" alignItems="center" container item xs={9} sm={6} md={2}>
          <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
          <img className={classes.ProfileImage} src="https://avatars.githubusercontent.com/u/76395623?v=4"></img>
              </Grid>
           
              <Grid justify="center" alignItems="center" container item xs={6} sm={9} md={12}>
              <Typography className={classes.Info} variant="h5" gutterBottom >
              Abd Albdahat
            </Typography>

            <Typography className={classes.Info} variant="h6" gutterBottom >
              Software Engineer
            </Typography>

            <Grid justify="center" alignItems="center" container item xs={12} sm={12} md={12}>
            <Grid justify="center" alignItems="center"  container item xs={3} sm={3} md={3}>
            <FacebookIcon className={classes.Social} fontSize="large" />
          </Grid>
          <Grid justify="center" alignItems="center" spacing={6} className={classes.logo} container item xs={6} sm={6} md={6}>
            <GitHubIcon className={classes.Social} fontSize="large" />
          </Grid>
              </Grid>
              </Grid>
           
          </Grid>


          </Grid>


        </Grid>
        </Grid>
      </Container>
    </>
  );
}


