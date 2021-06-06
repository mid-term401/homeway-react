import superagent from "superagent";
import React, { Component, useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// sign in User is working as a volunteer or a host:
export const verifyUser = function (api, username, password) {
  // console.log('1', username, password)
  return (dispatch) => {
    return superagent
      .post(api)
      .set("authorization", `Basic ${btoa(`${username}:${password}`)}`)
      .then((response) => {
        // console.log('2', response.body)
        
        dispatch(login({ results: response }));
      });
  };
};

export const login = (payload) => {
  return {
    type: "VERIFYUSER",
    payload,
  };
};


export const bearerAuth = function (api,id,token) {
  return (dispatch) => {
    console.log('5',api,token)
    return superagent
      .get(`${api}/1`)
      .set("authorization", `${token}`)
      .then((response) => {
        // console.log('4', response.body)
        dispatch(bearer({ results: response }));
      }).catch(error =>{
        console.log(`error in bearer auth ${error}`)
      });
  };
};
export const bearer = (payload) => {
  return {
    type: "BEARER",
    payload,
  };
};

// Get / Update / Post / Delete
export const postRemoteData = function (api, sendBody, id) {
  return (dispatch) => {
    return superagent
      .post(`${api}/${id}`)
      .send(sendBody)
      .then((response) => {
        // console.log(`sign-in response`, response);
        dispatch(postAction({ results: response }));
      })
      .catch((error) => {
        console.log("error in sign in", error);
      });
  };
};

export const getRemoteData = function (api,id) {
  return (dispatch) => {
    return superagent.get(`${api}/${id}`).then((response) => {
      console.log('response in action',response)
      dispatch(getAction({ results: response }));
    });
  };
};

export const getAction = (payload) => {
  return {
    type: "GET",
    payload,
  };
};

export const updateRemoteData = function (api, id, sendBody) {
  return (dispatch) => {
    return superagent
      .put(`${api}/${id}`)
      .send(sendBody)
      .then((response) => {
        dispatch(updateAction({ results: response.body }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateAction = (payload) => {
  return {
    type: "PUT",
    payload,
  };
};
// is working for sign up

export const postAction = (payload) => {
  return {
    type: "POST",
    payload,
  };
};

export const deleteRemoteData = function (api, id) {
  return (dispatch) => {
    return superagent.delete(`${api}/${id}`).then((response) => {
      dispatch(deleteAction({ results: response.body }));
    });
  };
};

export const deleteAction = (payload) => {
  return {
    type: "DELETE",
    payload,
  };
};
