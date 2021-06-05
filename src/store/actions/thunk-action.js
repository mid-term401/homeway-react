import superagent from 'superagent';
import React, { Component, useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Verify User:
export const verifyUser = function (api,username, password){
    return (dispatch) =>{
        return superagent.post(api).set('authorization',`Basic ${btoa(`${username}:${password}`)}`).then(response =>{
            dispatch(verifyUser({ results: response.token }));
        })
    }
}

export const verifyUser = (payload) => {
    return {
      type: 'VERIFYUSER',
      payload,
    };
  };

 // Get / Update / Post / Delete
export const getRemoteData = function (api) {
  return (dispatch) => {
    return superagent.get(api).then((response) => {
      dispatch(getAction({ results: response.body }));
    });
  };
};



export const getAction = (payload) => {
  return {
    type: 'GET',
    payload,
  };
};


export const updateRemoteData = function (api,id, sendBody) {
  return (dispatch) => {
    return superagent
      .put(`${api}/${id}`)
      .send(sendBody)
      .then((response) => {
        dispatch(updateAction({ results: response.body }));
      });
  };
};

export const updateAction = (payload) => {
    return {
      type: 'PUT',
      payload,
    };
};

export const postRemoteData = function (api,id, sendBody) {
    return (dispatch) => {
      return superagent
        .post(`${api}/${id}`)
        .send(sendBody)
        .then((response) => {
          dispatch(postAction({ results: response.body }));
        });
    };
};
  
export const postAction = (payload) => {
    return {
      type: 'POST',
      payload,
    };
};


export const deleteRemoteData = function (api,id) {
    return (dispatch) => {
      return superagent
        .delete(`${api}/${id}`)
        .then((response) => {
          dispatch(deleteAction({ results: response.body }));
        });
    };
};

export const deleteAction = (payload) => {
    return {
      type: 'DELETE',
      payload,
    };
};


