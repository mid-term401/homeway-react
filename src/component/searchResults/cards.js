import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
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
import DetailsIcon from '@material-ui/icons/Details';
import CategoryIcon from '@material-ui/icons/Category';
import BlockIcon from '@material-ui/icons/Block';


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
    height: 650,
    
  },

  // CardBackground:
  // {
  //   backgroundImage: `url(${"https://coco-net.org/wp-content/uploads/2015/01/COCo-Circle-Orange-300x300.png"})`,
  
  // },

  FontSpace:
  {
    marginTop:50
  }
}));

export default function SearchResults() {
  const classes = useStyles();

  const items = [
    {
      image: "image1",
      title: "Person have ability to teach kids",
      during: "3 Months",
      country: "New York",
      description: "Become a Teacher for the kids for math in africa and stay for free this included food and sleep.",
      type: "Teaching",
      minimum_age: "18"

    },
    {
      image: image2,
      title: "Person have ability on work in building",
      during: "9 Months",
      country: "Maiami",
      description: "Become a Supervisor on Construction workers for a shopping market in paris and stay for free.",
      type: "Bulding",
      minimum_age: "18"
    },
    {
      image: image3,
      title: "Person have ability to cook traditional food",
      during: "1 Month",
      country: "New Jersi",
      description: "Become a chef for hotel kitchen in millan and stay for free this included food and sleep.",
      type: "Kitchen",
      minimum_age: "18"
    },
    {
      image: image4,
      title: "Person have ability to Lawn mowers",
      during: "6 Months",
      country: "Alberta",
      description: "Become a Supervisor on Construction workers for a shopping market in paris and stay for free.",
      type: "Farmer",
      minimum_age: "18"
    },
    {
      image: image5,
      title: "Person have ability to cook a mexican food",
      during: "3 Months",
      country: "British Columbia",
      description: "Become a chef for hotel kitchen in millan and stay for free this included food and sleep.",
      type: "Kitchen",
      minimum_age: "18"
    },
    {
      image: image6,
      title: "Person have ability to give the a lecture on technology",
      during: "1 day",
      country: "Ontario",
      description: "Become a Teacher for the kids for math in africa and stay for free this included food and sleep.",
      type: "Teaching",
      minimum_age: "18"

    },
    {
      image: image1,
      title: "Person have ability to teach kids",
      during: "3 Months",
      country: "New York",
      description: "Become a Teacher for the kids for math in africa and stay for free this included food and sleep.",
      type: "Teaching",
      minimum_age: "18"

    },
    {
      image: image2,
      title: "Person have ability on work in building",
      during: "9 Months",
      country: "Maiami",
      description: "Become a Supervisor on Construction workers for a shopping market in paris and stay for free.",
      type: "Bulding",
      minimum_age: "18"
    },
    {
      image: image3,
      title: "Person have ability to cook traditional food",
      during: "1 Month",
      country: "New Jersi",
      description: "Become a chef for hotel kitchen in millan and stay for free this included food and sleep.",
      type: "Kitchen",
      minimum_age: "18"
    },
   
  ];
  return (
    <Box className={classes.CardBackground}>
      <Container >
        <Typography style={{ fontFamily: "Comic Sans MS", color: "#ffb400", }} className='titleType' gutterBottom variant='h4' component='h2'>
          Search Results
        </Typography>

        <Grid container  className={classes.FontSpace} spacing={4}>
          {items.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
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
                        <Grid container item xs={12} sm={12} md={2}>
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
                        <Grid container item xs={12} sm={12} md={2}>
                          <DetailsIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
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
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.during}
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
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.country}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={2}>
                          <CategoryIcon  className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.type}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12} md={12}>
                        <Grid container item xs={12} sm={12} md={2}>
                          <BlockIcon className={classes.Iconic} style={{ fontSize: 30 }} />
                        </Grid>
                        <Grid container item xs={12} sm={12} md={10}>
                          <Typography
                            className={classes.CardFont}
                            variant='h6'
                            color='textSecondary'
                          >
                            {item.minimum_age}
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
