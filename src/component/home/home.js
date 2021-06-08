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
import Loading from "../loading/loading";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import superagent from "superagent";

export default function Home() {
  // const classes = useStyles();
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState({});
  // const [service, setService] = useState({});

  // const state = useSelector((state) => {
  //   return {
  //     userData: state.loggin,
  //     thunkReducer: state.thunkReducer,
  //   };
  // });

  // useEffect(() => {
  //   if (state.userData.loggedIn) {
  //     loadProfile();
  //   }
  // }, [state.userData.loggedIn]);

  // function loadProfile() {
  //   superagent.get(`https://robust-entity-homeway.herokuapp.com/data`).then((response) => {
  //     // let text = JSON.parse(response);
  //     console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀", response);
  //     // setUser(response);
  //     setLoading(false);
  //   });
  // }
  // if (!loading) {
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
//  else return <Loading />;
// }
