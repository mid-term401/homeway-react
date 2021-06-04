import React, { Component, useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import superagent from "superagent";

// const API = process.env.API_Server
const API = "https://auth-server-401.herokuapp.com";
// check the type of the user and put it as a state and depend on the state render element
const initialState = {
  loggedIn: false,
  loggedOut: true,
  isVerified: false,
  userCapabilities: ['read', 'delete', 'addService', 'UpdateService', 'updateProfile'],
  okToRender: false,
  isHost: false,
  isVolunteer: false,
  isAdmin: false,
//   cookie: cookie.load('auth'),// go to cookie and search for any cookie with the key auth
  user: [],
};

const loggin = (state = intialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case "CHECKUSERTYPE":
      if (payload == 'host'){
        return isHost = true;
      }
      else if( payload == 'volunteer'){
        return isVolunteer == true;
      } else if (payload == 'admin'){
        return isAdmin = true;
      }

    case "OKTORENDER":
      return{ okToRender = loggin && capability ?userCapabilities.includes(payload) : false
      }


    case "VALIDATETOKEN":
        const user = jwt.decode(payload)
        // this.setLoginState(true,token,user)
        return {
            isVerified: true,
        }

    case "VERIFYUSER":
      // try {
      //     const response = await superagent.post(`${API}/signin`).set('authorization',`Basic ${btoa(`${username}:${password}`)}`);
      //     this.validateToken(response.body.token)
      //   } catch (error) {
      //     console.error('Signin Error',error.message)
      //   }
      return state;

    case "LOGIN":
      return {
        loggedIn: true,
        loggedOut: false,
        user: user, // add user
      };

    case "LOGOUT":
      return {
        loggedIn: false,
        loggedOut: true,
        user: {}, // remove user
      };

    case "RESET":
      return intialState;

    default:
      return state;
  }
};

export default loggin;
