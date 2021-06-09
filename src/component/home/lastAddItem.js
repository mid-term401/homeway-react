import { React, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Rating from "@material-ui/lab/Rating";
import DetailsIcon from "@material-ui/icons/Details";
import { makeStyles } from "@material-ui/core/styles";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import PublicIcon from "@material-ui/icons/Public";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CategoryIcon from "@material-ui/icons/Category";

const useStyles = makeStyles((theme) => ({
  font: {
    position: "absolute",
    top: "25%",
    display:"block",
    width: "100%",
    height: "auto",
    textAlign: "center",
    color: "white",
    backgroundColor: "#fb8c00b3",
    fontFamily: "Comic Sans MS",
    
  },

  CardFont: {
    fontFamily: "Comic Sans MS",
  },

  ImgDiv: {
    backgroundColor: "#00000085",
  },

  BackImg: {
    color: "black",
    "&:hover": {
      backgroundColor: "black",
    },
  },

  Profile: {
    marginTop: 10,
    borderRadius: "60%",
    width: 60,
    height: 60,
    marginLeft: 10,
  },

  Iconic: {
    color: "#ffb400",
  },

  Card: {
    height: 600,
    width: 400,
  },
}));

export default function LastAddItem() {
  const classes = useStyles();
  const data = JSON.parse(localStorage.getItem("services"));
  let lastAdd = [];
  let host = data.hosts;
  lastAdd.push(data.services[data.services.length - 1]);
  lastAdd.push(data.services[data.services.length - 2]);
  lastAdd.push(data.services[data.services.length - 3]);
  

  host.map((hostId) => {
    lastAdd.map((hostService, idx) => {
      if (hostId.id === hostService.host_id) {
        lastAdd[idx].hostImage = hostId.profile_image;
        lastAdd[idx].userTitle = hostId.first_name + " " + hostId.last_name;
      }
    });
  });
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀", lastAdd);
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(-1);

  return (
    <Box className='ServiceBox'>
      <Container>
        <Typography
          style={{ fontFamily: "Comic Sans MS", color: "#ffb400" }}
          className='titleType'
          gutterBottom
          variant='h4'
          component='h2'
        >
          Last Added
        </Typography>

        <Grid container spacing={4}>
          {lastAdd.map((item) => (
            <Grid key={item} item xs={12} sm={4} md={4}>
              <Card style={{ overflowY: "auto" }} className={classes.Card}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    width='200'
                    image={item.profile_image}
                    title='Contemplative Reptile'
                    className={classes.BackImg}
                  />
                  <Grid justify='center' alignItems='center' container item xs={12} sm={12} md={8}>
                    <Grid item xs={12} sm={12} md={5}>
                      <img className={classes.Profile} src={item.hostImage || ""}></img>
                    </Grid>
                    <Grid justify='center' alignItems='center' item xs={12} sm={12} md={7}>
                      <Typography
                        className={classes.CardFont}
                        variant='h6'
                        color='textSecondary'
                        
                      >
                        {item.userTitle}
                      </Typography>

                      {/* <Grid justify='center' alignItems='center' item xs={12} sm={12} md={3}>
                        <div className={classes.rating}>
                          <Rating
                            name='half-rating'
                            value={rating}
                            precision={0.5}
                            onChange={(e, value) => setRating(value)}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                          />
                          {rating !== null && <Box sx={{ ml: 2 }}>{rating}</Box>}
                        </div>
                      </Grid> */}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    style={{ backgroundColor: "#ffb400", height: 1, marginTop: 10 }}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                  ></Grid>
                  <Grid container item xs={12} sm={12} md={12}>
                    <Typography gutterBottom variant='h5' component='h5' className={classes.font}>
                      {item.description}
                    </Typography>
                  </Grid>
                  <CardContent>
                    <Grid container item xs={12} sm={12} md={12}>
                      <Grid container item xs={12} sm={12} md={1}>
                        <DetailsIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                      </Grid>
                      <Grid container item xs={12} sm={12} md={11}>
                        <Typography
                          className={classes.CardFont}
                          variant='subtitle1'
                          color='textSecondary'
                        >
                          {item.details}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={12}>
                      <Grid container item xs={12} sm={12} md={2}>
                        <TimelapseIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                      </Grid>
                      <Grid container item xs={12} sm={12} md={10}>
                        <Typography
                          className={classes.CardFont}
                          variant='subtitle1'
                          color='textSecondary'
                        >
                          {item.duration}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={12}>
                      <Grid container item xs={12} sm={12} md={2}>
                        <PublicIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                      </Grid>
                      <Grid container item xs={12} sm={12} md={10}>
                        <Typography
                          className={classes.CardFont}
                          variant='subtitle1'
                          color='textSecondary'
                        >
                          {item.country}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={12}>
                      <Grid container item xs={12} sm={12} md={2}>
                        <CategoryIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                      </Grid>
                      <Grid container item xs={12} sm={12} md={10}>
                        <Typography
                          className={classes.CardFont}
                          variant='subtitle1'
                          color='textSecondary'
                        >
                          {item.title}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={12}>
                      <Grid container item xs={12} sm={12} md={2}>
                        <CalendarTodayIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                      </Grid>
                      <Grid container item xs={12} sm={12} md={10}>
                        <Typography
                          className={classes.CardFont}
                          variant='subtitle1'
                          color='textSecondary'
                        >
                          {"Minimum  Age " + item.minumim_age}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
