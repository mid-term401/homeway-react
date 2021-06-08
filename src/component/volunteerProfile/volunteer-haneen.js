import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Container from "@material-ui/core/Container";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import LanguageIcon from "@material-ui/icons/Language";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import CardActions from "@material-ui/core/CardActions";
import { connect } from "react-redux";
import { getRemoteData, bearerAuth, updateRemoteData } from "../../store/actions/thunk-action";
import { checkUserType } from "../../store/actions/acl-action";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { If, Else, Then } from "react-if";
import LinearProgress from "@material-ui/core/LinearProgress";

let results;
const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "white",
    borderRadius: 4,
  },

  button: {
    width: "135px",
    padding: 10,
    marginTop: 10,
    background: "#FB8C00",
    color: "white",
    height: 40,
  },

  icon: {
    color: "#FB8C00",
    marginLeft: 45,
  },

  root: {
    display: "flex",
    width: "auto",
    marginTop: 15,
    // border:"2px solid",
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
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

  grid: {
    height: 110,
    marginTop: 50,
  },

  description: {
    // border:"2px solid",
    marginTop: "20px",
    borderRadius: 3,
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
  },

  font: {
    fontFamily: "Lobster, cursive",
  },

  review: {
    fontFamily: "Lobster, cursive",
    padding: "20px",
  },

  skills: {
    fontFamily: "Lobster, cursive",
    textAlign: "center",
  },

  rating: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      // marginTop: theme.spacing(1),
    },
    marginLeft: 50,
    marginTop: 10,
  },
}));

function HostProfileViewingAsVolunteer(props) {
  const classes = useStyles();

  // if (props.thunkReducer.results) {
  //   results = props.thunkReducer.results.body;
  // }
  const dispatch = useDispatch();
  let host;

  useEffect(() => {
    if (props.userData.loggedIn) {
      dispatch(
        bearerAuth(
          "https://robust-entity-homeway.herokuapp.com/volunteer",

          props.userData.id,
          props.userData.cookie
        )
      );
      host = props;
      setTimeout(function () {
        help();
      }, 1000);
    }
  }, [props.userData]);

  async function help() {
    console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ", props.thunkReducer.results.text);
    // results = JSON.parse(await props.thunkReducer?.results?.text);
    results = props.thunkReducer.results.body;
  }
  if (results) {
    return (
      <>
        <Container>
          <Grid container spacing={6}>
            <Grid container item xs={12} sm={12} md={12} className={classes.submit}>
              <Grid item xs={12} sm={6} md={3}>
                <img
                  className='profileImage'
                  src='https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'
                ></img>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} className={classes.grid}>
                <Grid item xs={12} sm={6} md={2}>
                  <PersonIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    {`${results.first_name}  ${results.last_name}`}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <EmailIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    {results.email}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <PublicIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    {results.country}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <LanguageIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    {results.country}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <div className={classes.rating}>
                    <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
                  </div>
                </Grid>
              </Grid>

              <Grid container item xs={12} sm={6} md={2} className={classes.grid}>
                <Button variant='h6' type='submit' variant='contained' className={classes.button}>
                  Edit profile
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={0} item xs={12} sm={12} md={12} className={classes.card}>
              <Typography
                style={{ color: "#FB8C00" }}
                className={classes.font}
                variant='h6'
                gutterBottom
              >
                Preview:
              </Typography>

              <Typography className={classes.review} variant='h6' gutterBottom>
                {results.description ? results.description : "No description yet"}
              </Typography>

              <Typography
                className={classes.font}
                style={{ color: "#FB8C00" }}
                variant='h6'
                gutterBottom
              >
                Skills:
              </Typography>

              <Grid container className={classes.review} item xs={12} sm={12} md={12}>
                <Grid className={classes.review} item xs={12} sm={3} md={2}>
                  <Typography className={classes.skills} variant='h6' gutterBottom>
                    Collaborative Person
                  </Typography>
                </Grid>

                <Grid className={classes.review} item xs={12} sm={9} md={2}>
                  <Typography className={classes.skills} variant='h6' gutterBottom>
                    Hard Worker
                  </Typography>
                </Grid>

                <Grid className={classes.review} item xs={12} sm={9} md={2}>
                  <Typography className={classes.skills} variant='h6' gutterBottom>
                    Creativity
                  </Typography>
                </Grid>

                <Grid className={classes.review} item xs={12} sm={9} md={2}>
                  <Typography className={classes.skills} variant='h6' gutterBottom>
                    Responsible
                  </Typography>
                </Grid>

                <Grid className={classes.review} item xs={12} sm={9} md={2}>
                  <Typography className={classes.skills} variant='h6' gutterBottom>
                    Ambituious
                  </Typography>
                </Grid>

                <Grid className={classes.review} item xs={12} sm={9} md={2}>
                  <Typography className={classes.skills} variant='h6' gutterBottom>
                    Integrity
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else
    return (
      <div className={classes.pro}>
        <LinearProgress />
      </div>
    );
}

const mapStateToProps = (state) => {
  return { userData: state.loggin, thunkReducer: state.thunkReducer };
};
const mapDispatchToProps = { getRemoteData, bearerAuth, updateRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(HostProfileViewingAsVolunteer);
