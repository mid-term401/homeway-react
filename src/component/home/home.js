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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import superagent from "superagent";
import cookie from "react-cookies";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState({});

  const state1 = useSelector((state) => {
    console.log("🚀🚀🚀 ~~~~ state ~~~~ state", state);
    return {
      userData: state.loggin,
      thunkReducer: state.thunkReducer,
    };
  });

  useEffect(() => {
    loadProfile();
  }, []);

  function loadProfile() {
    superagent.get(`https://robust-entity-homeway.herokuapp.com/data`).then((response) => {
      localStorage.setItem("services", JSON.stringify(response.body));
      setLoading(false);
    });
  }
  if (!loading) {
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
        </Grid>
      </Box>
    );
  } else return <Loading />;
}
