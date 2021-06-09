import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import image1 from "../assets/homeImage/s1.jpg";
import image2 from "../assets/homeImage/s2.jpg";
import image3 from "../assets/homeImage/s3.jpg";
import image4 from "../assets/homeImage/s7.jpg";
import image5 from "../assets/homeImage/s4.jpg";
import image6 from "../assets/homeImage/s5.jpg";
import TitleIcon from "@material-ui/icons/Title";
import { makeStyles } from "@material-ui/core/styles";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import PublicIcon from "@material-ui/icons/Public";

const useStyles = makeStyles((theme) => ({
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

  Iconic: {
    color: "#ffb400",
  },

  Card: {
    height: 440,
  },
}));
export default function LastAddItem() {
  const classes = useStyles();

  const data = JSON.parse(localStorage.getItem("services"));
  let lastAdd = data.services;
  let host = data.hosts;

  const firstCountry = "Ireland";
  const sectCountry = "Zambia";
  let items2 = [];
  const items1 = [];

  lastAdd.map((serviceCountry, idx) => {
    if (serviceCountry.country.includes(firstCountry)) {
      items2.push({
        image: serviceCountry.profile_image,
        title: serviceCountry.description,
        during: serviceCountry.duration,
        country: serviceCountry.title,
      });
    }
    if (serviceCountry.country.includes(sectCountry)) {
      items1.push({
        image: serviceCountry.profile_image,
        title: serviceCountry.description,
        during: serviceCountry.duration,
        country: serviceCountry.title,
      });
    }
  });
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀", items2);

  //addd
  //Ireland  Zambia  Thailand

  function Item(props) {
    return (
      <Paper>
        <img src={props.item.image}></img>
      </Paper>
    );
  }
  return (
    <Box className='RecommendedBox'>
      <Container style={{ marginTop: 100 }}>
        <Typography
          style={{ fontFamily: "Comic Sans MS", color: "#ffb400" }}
          gutterBottom
          variant='h4'
          component='h2'
        >
          Recommended
        </Typography>

        <Grid style={{ marginTop: 40 }} container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              style={{ fontFamily: "Comic Sans MS", color: "#ffb400", marginBottom: 40 }}
              gutterBottom
              variant='h5'
              component='h2'
            >
              Ireland
            </Typography>
            <Carousel
              animation='slide'
              indicatorIconButtonProps={{
                style: {
                  display: "none",
                },
              }}
            >
              {items2.map((item, i) => (
                <Card style={{ overflowY: "auto" }} className={classes.Card}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      height='280'
                      image={item.image}
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={1}>
                          <TitleIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={11}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={1}>
                          <TimelapseIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.during}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={1}>
                          <PublicIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.country}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              style={{ fontFamily: "Comic Sans MS", color: "#ffb400", marginBottom: 40 }}
              gutterBottom
              variant='h5'
              component='h2'
            >
              Zambia
            </Typography>
            <Carousel
              animation='slide'
              indicatorIconButtonProps={{
                style: {
                  display: "none",
                },
              }}
            >
              {items1.map((item, i) => (
                <Card style={{ overflowY: "auto" }} className={classes.Card}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      height='280'
                      image={item.image}
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={1}>
                          <TitleIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.title}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={1}>
                          <TimelapseIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.during}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={1}>
                          <PublicIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.country}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
