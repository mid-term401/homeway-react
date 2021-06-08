import React, { Component, useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import superagent from "superagent";
import be from "date-fns/esm/locale/be/index.js";

const initialState = {
  loggedIn: false,
  loggedOut: true,
  isVerified: false,
  isHost: false,
  isVolunteer: false,
  isAdmin: false,
  user: [],
  id: 0, // id of user host or volunteer
  idVolunteer: 0, // id of second user
  idHost: 0,
  idService: 0, // id of service
  profile: {},
  cookie: cookie.load("auth", { path: "/" }), //Returns undefined if the cookie does not exist.
  error: null,
  isOpen: false,
};

const loggin = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHECKCOOKIE":
      if (state.cookie) {
        return { ...state, isVerified: true, loggedIn: true };
      }
    case "BOOLEAN":
      if (payload === true) {
        return { ...state, isOpen: false };
      } else if (payload === false) {
        return { ...state, isOpen: true };
      }

    case "saveID":
      return { ...state, idHost: payload };

    // case "REMOVECOOKIE":
    //   cookie.remove("auth");
    //   return { ...state, cookie: cookie.remove("auth", { path: "/" }) };

    case "CHECKUSERTYPE":
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
        console.log("TestingHost", jwt.decode(token));
        const { id, name, role } = jwt.decode(token);
        // console.log("999", id, name, role);
        cookie.save("auth", token);

        const user = {
          id,
          name,
          token,
        };
        if (role === "volunteer") {
          // console.log(1,'??')

          return {
            ...state,
            loggedIn: true,
            loggedOut: false,
            isVerified: true,
            isHost: false,
            isVolunteer: true,
            isAdmin: false,
            id,
            idVolunteer: id,
            cookie: token,
            user: [user],
            isOpen: false,
          };
        } else if (role === "host") {
          return {
            ...state,
            loggedIn: true,
            loggedOut: false,
            isVerified: true,
            isHost: true,
            isVolunteer: false,
            isAdmin: false,
            id,
            isOpen: false,

            idHost: id,
            cookie: token,
            user: [user],
          };
        }
      } else {
        // console.log(3,'??')
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

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        loggedOut: true,
        isHost: false,
        isVolunteer: false,
        user: [],
        cookie: cookie.remove("auth", { path: "/" }),
      };

    case "RESET":
      return state;

    default:
      return state;
  }
};

export default loggin;
