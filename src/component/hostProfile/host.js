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
import Rating from "@material-ui/lab/Rating";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import superagent from "superagent";
import cookie from "react-cookies";
import Loading from "../loading/loading";
import SocketBtn from "../Socketio/Socketio";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "white",
    borderRadius: 4,
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
  },

  Space: {
    marginTop: 120,
  },

  button: {
    width: "135px",
    padding: 10,
    marginTop: 10,
    background: "#FB8C00",
    color: "white",
    height: 40,

    "&:hover": {
      backgroundColor: "white",
      color: "#FB8C00",
    },
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
    backgroundImage: `url(${"https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249"})`,
  },

  cover: {
    width: 400,
    height: "auto",
  },

  Card: {
    backgroundColor: "white",
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
    width: "100%",
    marginTop: "20px",
    marginLeft: "8px",
    borderRadius: 3,
    backgroundColor: "#fb8c0024",
  },

  font: {
    fontFamily: "Lobster, cursive",
  },

  About: {
    width: "100%",
    padding: 15,
  },

  rating: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      // marginTop: theme.spacing(2),
    },
    marginLeft: 50,
    marginTop: 10,
  },

  pro: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

let text = [];
function HostProfileViewingAsHost(props) {
  const classes = useStyles();

  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [service, setService] = useState({});
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(-1);
  const state = useSelector((state) => {
    return {
      userData: state.loggin,
      thunkReducer: state.thunkReducer,
    };
  });

  console.log("🚀🚀🚀 ~~~~ HostProfileViewingAsHost ~~~~ user", user, state);
  useEffect(() => {
    if (state.userData.loggedIn) {
      loadProfile();
    }
  }, [state.userData.loggedIn]);
  function loadProfile() {
    let id = state.userData.routeId;

    if (!id) {
      id = state.userData.id;
    }

    superagent
      .get(`https://robust-entity-homeway.herokuapp.com/host/${id}`)
      .set("authorization", `${state.userData.cookie}`)
      .then((response) => {
        cookie.save("profileData", response.body[0]);
        setUser(cookie.load("profileData"));
      });

    superagent
      .get(`https://robust-entity-homeway.herokuapp.com/host/${id}/service`)
      .set("authorization", `${state.userData.cookie}`)
      .then((response) => {
        localStorage.setItem("servicesProfile", response.text);
        if (text.length === 0) {
          text = JSON.parse(localStorage.getItem("servicesProfile"));
        }
        setLoading(false);
      });
  }

  console.log("🚀🚀🚀🚀🚀🚀🚀host🚀🚀🚀🚀🚀🚀🚀🚀", text);
  // text.map((value, index) => {});

  if (!loading) {
    return (
      <>
        {/* {text.map((value, index) => {
          console.log("🚀🚀🚀🚀🚀🚀🚀host🚀🚀🚀🚀🚀🚀🚀🚀", value);
        })} */}
        <Container>
          <Grid container spacing={6} className={classes.Space}>
            <Grid container item xs={12} sm={12} md={12} className={classes.submit}>
              <Grid item xs={12} sm={6} md={3}>
                <img className='profileImage' src={user.profile_image}></img>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} className={classes.grid}>
                <Grid item xs={12} sm={6} md={2}>
                  <PersonIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    {`${user.first_name}  ${user.last_name}`}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <EmailIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    {`${user.email}`}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <PublicIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={10}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    {`${user.country}`}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <LanguageIcon fontSize='large' className={classes.icon} />
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                  <Typography className={classes.font} variant='h6' gutterBottom>
                    English
                  </Typography>
                </Grid>

                {/* <Grid item xs={12} sm={6} md={2}>
                  <div className={classes.rating}>
                    <Rating
                      name='half-rating'
                      value={rating}
                      precision={0.5}
                      onChange={(e, value) => setRating(value)}
                    />
                  </div>
                </Grid> */}
              </Grid>

              <Grid container item xs={12} sm={6} md={2} className={classes.grid}>
                {/* <Button
                  variant="h6"
                  type="submit"
                  variant="contained"
                  className={classes.button}
                >
                  Edit profile
                </Button> */}
                <NavLink exact to='/updateHostProfile'>
                  Edit profile
                </NavLink>
              </Grid>
              <Grid container spacing={2}>
                <Grid
                  spacing={1}
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.description}
                >
                  <Grid container item xs={12} sm={12} md={12}>
                    <Typography className={classes.font} variant='h5' style={{ color: "#FB8C00" }}>
                      About Me:
                    </Typography>
                  </Grid>

                  <Grid container item xs={12} sm={12} md={12}>
                    {`I am the leader of re post entity what are you looking AT you can hate but still the best site of our group`}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={0} item xs={12} sm={12} md={12} className={classes.Card}>
              <Typography
                className={classes.font}
                style={{ color: "#FB8C00" }}
                variant='h5'
                gutterBottom
              >
                Services:
              </Typography>

              <Grid container className={classes.submit}>
                {text.map((item) => (
                  <Card key={item + "_"} className={classes.root}>
                    <CardMedia
                      className={classes.cover}
                      image={item.profile_image}
                      title='Live from space album cover'
                      // height='250'
                      width='300'
                    />

                    <CardContent className={classes.content}>
                      <Typography className={classes.font} component='h5' variant='h5'>
                        {item.title}
                      </Typography>
                      <Typography
                        className={classes.font}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.details}
                      </Typography>

                      <Typography
                        className={classes.font}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.type}
                      </Typography>

                      <Typography
                        className={classes.font}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.country}
                      </Typography>

                      <Typography
                        className={classes.font}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.duration}
                      </Typography>

                      <Typography
                        className={classes.font}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.working_days}
                      </Typography>

                      <Typography
                        className={classes.font}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.working_hours}
                      </Typography>

                      <Typography
                        className={classes.font}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.minumim_age}
                      </Typography>

                      <CardActions>
                        <Button size='small' style={{ color: "#FB8C00" }}>
                          Delete
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else return <Loading />;
}
export default HostProfileViewingAsHost;
