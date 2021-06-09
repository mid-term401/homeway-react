import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import image1 from "../assets/homeImage/1.jpg";
import image2 from "../assets/homeImage/2.jpg";
import image3 from "../assets/homeImage/3.jpg";
import image4 from "../assets/homeImage/4.jpg";
import image5 from "../assets/homeImage/p5.jpg";
import image6 from "../assets/homeImage/p01.jpg";
import image7 from "../assets/homeImage/p02.jpg";
import image8 from "../assets/homeImage/p03.jpg";
import Rating from "@material-ui/lab/Rating";
import DetailsIcon from "@material-ui/icons/Details";
// import image6 from "../assets/homeImage/wall6.jpg";
import { makeStyles } from "@material-ui/core/styles";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import PublicIcon from "@material-ui/icons/Public";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CategoryIcon from "@material-ui/icons/Category";
import cookie from "react-cookies";

const useStyles = makeStyles((theme) => ({
  font: {
    position: "absolute",
    top: "25%",
    width: "100%",
    height: "auto",
    textAlign: "center",
    color: "white",
    backgroundColor: "#fb8c0078",
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
    width: 300,
  },
}));

export default function LastAddItem(props) {
  const classes = useStyles();
  // const data = JSON.parse(cookie.load("serviceData"));
  let data = cookie.load("serviceData");
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀", data);

  const items = [
    {
      image: image1,
      profileImg: image5,
      profileName: "Steve Jobs",
      name: "Farmer that help with carrying crop",
      description:
        "Become a Farmer for a small farm in maiami and stay for free. Experience free city tours.",
      duration: "6 Months",
      country: "USA",
    },
    {
      image: image2,
      profileImg: image6,
      profileName: "Ella Matty",
      name: "Supervisor that responsiple on building",
      description:
        "Become a Supervisor on Construction workers for a shopping market in paris and stay for free.",
      duration: "1 Year",
      country: "France",
    },
    {
      image: image3,
      profileImg: image7,
      profileName: "Emma Watson",
      name: "Teacher have ability to teach kids",
      description:
        "Become a Teacher for the kids for math in africa and stay for free this included food and sleep.",
      duration: "3 Month",
      country: "Africa",
    },
    {
      image: image4,
      profileImg: image8,
      profileName: "Mark Steve",
      name: "Person have a ability to cook italian food",
      description:
        "Become a chef for hotel kitchen in millan and stay for free this included food and sleep.",
      duration: "1 Year and half",
      country: "Italy",
    },
  ];
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
          {items.map((item) => (
            <Grid key={item} item xs={12} sm={4} md={3}>
              <Card style={{ overflowY: "auto" }} className={classes.Card}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    width='200'
                    image={item.image}
                    title='Contemplative Reptile'
                    className={classes.BackImg}
                  />
                  <Grid justify='center' alignItems='center' container item xs={12} sm={12} md={8}>
                    <Grid item xs={12} sm={12} md={5}>
                      <img className={classes.Profile} src={item.profileImg}></img>
                    </Grid>
                    <Grid justify='center' alignItems='center' item xs={12} sm={12} md={7}>
                      <Typography
                        className={classes.CardFont}
                        variant='subtitle1'
                        color='textSecondary'
                      >
                        {item.profileName}
                      </Typography>

                      <Grid justify='center' alignItems='center' item xs={12} sm={12} md={3}>
                        <div className={classes.rating}>
                          <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
                        </div>
                      </Grid>
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
                      {item.name}
                    </Typography>
                  </Grid>
                  <CardContent>
                    <Grid container item xs={12} sm={12} md={12}>
                      <Grid container item xs={12} sm={12} md={2}>
                        <DetailsIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                      </Grid>
                      <Grid container item xs={12} sm={12} md={10}>
                        <Typography
                          className={classes.CardFont}
                          variant='subtitle1'
                          color='textSecondary'
                        >
                          {item.description}
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
                          {item.country}
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
                          {item.country}
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
