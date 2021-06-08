import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Skeleton from "@material-ui/lab/Skeleton";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

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

function HostProfileViewingAsVolunteer() {
  const classes = useStyles();

  return (
    <div className={classes.pro}>
      <LinearProgress /* color={theme.palette.primary} */ />
      <Container className={classes.con}>
        <Grid container spacing={8} className={classes.con}>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <SkeletonChildrenDemo loading />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <div>
      <Box display='flex' alignItems='center'>
        <Box margin={1}>
          {loading ? (
            <Skeleton variant='circle'>
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src='https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg' />
          )}
        </Box>
        <Box width='100%'>
          {loading ? (
            <Skeleton width='100%'>
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>Ted</Typography>
          )}
        </Box>
      </Box>
      {loading ? (
        <Skeleton variant='rect' width='100%'>
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
      ) : (
        <img
          className={classes.image}
          src='https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512'
          alt=''
        />
      )}
    </div>
  );
}

export default HostProfileViewingAsVolunteer;
