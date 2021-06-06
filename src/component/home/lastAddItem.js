import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import image1 from "../assets/homeImage/wall.webp";
import image2 from "../assets/homeImage/wall2.png";
import image3 from "../assets/homeImage/wall3.jpg";
import image4 from "../assets/homeImage/wall4.jpg";
import image5 from "../assets/homeImage/wall5.webp";
import image6 from "../assets/homeImage/wall6.jpg";

export default function LastAddItem() {
  const items = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
  ];
  return (
    <Box>
      <Container>
        <Typography className='titleType' gutterBottom variant='h4' component='h2'>
          Last Added
        </Typography>

        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid key={item} item xs={12} sm={4} md={3}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
