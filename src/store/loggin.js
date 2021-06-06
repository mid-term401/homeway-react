import React, { Component, useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import superagent from "superagent";
import be from "date-fns/esm/locale/be/index.js";

// const API = process.env.API_Server
// const API = "https://auth-server-401.herokuapp.com";
// check the type of the user and put it as a state and depend on the state render element
const initialState = {
  loggedIn: false,
  loggedOut: true,
  isVerified: false,
  isHost: false,
  isVolunteer: false,
  isAdmin: false,
  user: [],

  cookie: cookie.load("auth", { path: "/" }), //Returns undefined if the cookie does not exist.
  error: null,
};

const loggin = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case "BEARER":
      console.log("after bearer", payload);
      return state;

    case "REMOVECOOKIE":
      cookie.remove("auth");
      return { ...state, cookie: cookie.remove("auth", { path: "/" }) };

    case "CHECKUSERTYPE":
      // console.log('check user',payload)
      if (payload == "host") {
        return {
          ...state,
          loggedIn: true,
          loggedOut: false,
          isVerified: true,
          isHost: true,
        };
      } else if (payload == "volunteer") {
        return {
          loggedIn: true,
          loggedOut: false,
          isVerified: true,
          isHost: false,
          isVolunteer: true,
          isAdmin: false,
          user: state.user,
        };
      }

    case "VERIFYUSER":
      if (payload) {
        const token = payload.results.body.token;
        const { id, name, role } = jwt.decode(token);
        cookie.save("auth",token);
        cookie.save("token",token);

        // cookie.save("id",id);
        const user = {
          id,
          name,
          token,
        };
        if (role === "volunteer") {
          return { ...state, loggedIn: true,
              loggedOut: false,
              isVerified: true,
              isHost: false,
              isVolunteer: true,
              isAdmin: false,
              user: [...state.user, user], };
         
        } else if (role === "host") {
          return  { ...state, loggedIn: true,
            loggedOut: false,
            isVerified: true,
            isHost: true,
            isVolunteer: false,
            isAdmin: false,
            user: [...state.user, user], };;
        }
      } else {
        return {
          loggedIn: false,
          loggedOut: true,
          isVerified: false,
          isHost: false,
          isVolunteer: false,
          isAdmin: false,
          user: [],
        };
      }

    // case "LOGIN":
    //   return {
    //     loggedIn: true,
    //     loggedOut: false,
    //     user: user, // add user
    //   };

    // case "LOGOUT":
    //   return {
    //     loggedIn: false,
    //     loggedOut: true,
    //     user: {}, // remove user
    //   };

    case "RESET":
      return state;

    default:
      return state;
  }
};

export default loggin;
