import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import LastAdd from "./lastAddItem";
import Slider from "./slider";
import Recommended from "./recommended";
import Search from "./search";
import Black from "./blackImgs";
import About from "./about";
import Socketio from "../Socketio/Socketio";
import AddressForm from "../signUp/volunteerBoshra";
import Tweets from "./Tweets";


export default function Home() {
  return (
    <Box>
      <Grid>
        <Slider />
        <Search />
      </Grid>
      <Grid>
        {/* <Black />
        <About />
        <LastAdd />
        <Recommended />
        <Socketio />
        <Tweets /> */}
        <AddressForm />
      </Grid>
    </Box>
  );
}
