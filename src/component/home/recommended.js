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
import image1 from "../assets/homeImage/wall.webp";
import image2 from "../assets/homeImage/wall2.png";
import image3 from "../assets/homeImage/wall3.jpg";
import image4 from "../assets/homeImage/wall4.jpg";
import image5 from "../assets/homeImage/wall5.webp";
import image6 from "../assets/homeImage/wall6.jpg";

export default function LastAddItem() {
  const items1 = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];
  const items2 = [
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
  ];

  const contry = [
    {
      name: "USA",
    },
    {
      name: "Canada",
    },
  ];

  function Item(props) {
    return (
      <Paper>
        <img src={props.item.image}></img>
      </Paper>
    );
  }
  return (
    <Box>
      <Container>
        <Typography className='titleType' gutterBottom variant='h4' component='h2'>
          Recommended
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant='h5' component='h2'>
              USA
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
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      height='140'
                      image={item.image}
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'></Typography>
                      <Typography component='p'>nothing</Typography>
                      <Typography variant='body2' color='textSecondary' component='p'></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography gutterBottom variant='h5' component='h2'>
              Canada
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
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      height='140'
                      image={item.image}
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'></Typography>
                      <Typography component='p'>nothing</Typography>
                      <Typography variant='body2' color='textSecondary' component='p'></Typography>
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
