import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
    backgroundColor: "#cfd8dc",
  },
  txt: {
    marginTop: 20,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation value={value} showLabels className={classes.root}>
      <Container>
        <Grid container spacing={4} color='secondary'>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.txt} variant='body2' color='textSecondary' component='p'>
              About Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.txt} variant='body2' color='textSecondary' component='p'>
              About Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.txt} variant='body2' color='textSecondary' component='p'>
              About Us
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </BottomNavigation>
  );
}
