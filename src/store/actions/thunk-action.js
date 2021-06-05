import superagent from "superagent";
import React, { Component, useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// sign in User is working as a volunteer or a host:
export const verifyUser = function (api, username, password) {
  return (dispatch) => {
    return superagent
      .post(api)
      .set("authorization", `Basic ${btoa(`${username}:${password}`)}`)
      .then((response) => {
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

export const getRemoteData = function (api) {
  return (dispatch) => {
    return superagent.get(api).then((response) => {
      dispatch(getAction({ results: response.body }));
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
