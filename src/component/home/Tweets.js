import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import TweetEmbed from "react-tweet-embed";

export default function Tweets() {

  const tweets = [
      <TweetEmbed id="1402344954228248592" options={{cards: 'hidden'  }}/>,
      <TweetEmbed id="1402344954228248592" options={{cards: 'hidden' }}/>,
      <TweetEmbed id="1398969802555760642" options={{cards: 'hidden' }}/>,
      <TweetEmbed id="1398969802555760642" options={{cards: 'hidden' }}/> 
  ]

  return (
    <>
      {/* <TweetEmbed id="1400733691417186304" options={{theme: 'dark' }}/>
      <TweetEmbed id="1400733691417186304" options={{cards: 'hidden' }}/>
      <TweetEmbed id="1398969802555760642" />
      <TweetEmbed id="1398969802555760642" options={{cards: 'hidden' }}/> */}
      {/* https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference */}


      <Box>
      <Container>
        <Typography className='titleType' gutterBottom variant='h4' component='h2'>
          Our Community 
        </Typography>

        <Grid container spacing={4}>
          {tweets.map((item) => (
            <Grid key={item} item xs={12} sm={4} md={3}>
              <Card >
                {item}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  );
}