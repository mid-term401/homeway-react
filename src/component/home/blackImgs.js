import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import animals from "../assets/vol/animals.png";
import building from "../assets/vol/building.png";
import community from "../assets/vol/community.png";
import environment from "../assets/vol/environment.png";
import farming from "../assets/vol/farming.png";
import teaching from "../assets/vol/teaching.png";
import volunteering from "../assets/vol/volunteering.png";

export default function LastAddItem() {
  const items = [
    {
      image: farming,
      name: "Farming",
    },
    {
      image: animals,
      name: "Animals",
    },
    {
      image: environment,
      name: "Environment",
    },
    {
      image: building,
      name: "Building",
    },
    {
      image: community,
      name: "Community",
    },
    {
      image: teaching,
      name: "Teaching",
    },
  ];
  return (
    <Box>
      <Container>
        <Grid className='blackName' container spacing={4}>
          {items.map((item) => (
            <Grid key={item} item xs={4} sm={2} md={2}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  image={item.image}
                  title='Contemplative Reptile'
                  className='blackImg'
                />

                <Typography
                  className='blackName'
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  {item.name}
                </Typography>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
