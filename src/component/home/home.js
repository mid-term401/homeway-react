import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import LastAdd from "./lastAddItem";
import Slider from "./slider";
import Recommended from "./recommended";
import Search from "./search";
import Black from "./blackImgs";
import About from "./about";
import SignUpVol from "../signUp/volunteer";

export default function Home() {
  return (
    <Box>
      <Grid>
        <Slider />
        <Search />
      </Grid>
      <Grid>
        <Black />
        <About />
        <LastAdd />
        <Recommended />
        <SignUpVol />
      </Grid>
    </Box>
  );
}
