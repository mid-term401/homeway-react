import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import superagent from "superagent";
import { NavLink } from "react-router-dom";
import cookie from "react-cookies";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

function UpdateForm() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const state = useSelector((state) => {
    return {
      userData: state.loggin,
      thunkReducer: state.thunkReducer,
    };
  });

  function loadProfile() {
    superagent
      .get(
        `https://robust-entity-homeway.herokuapp.com/volunteer/${state.userData.id}`
      )
      .set("authorization", `${state.userData.cookie}`)
      .then((response) => {
        cookie.save("profileData", response.body);
        setUser(cookie.load("profileData"));
        setLoading(false);
      });
  }

  useEffect(() => {
    if (state.userData.loggedIn) {
      loadProfile();
    }
  }, [state.userData.loggedIn]);

  /////////////// Updating Funtionality ///////////////////

  function updateDataBase(e) {
    e.preventDefault();
    let newData = {
        first_name: e.target.first_name.value,
        user_name: 'Boshra401',
        first_name: 'Boshra401',
        last_name: 'Boshra401',
        password : '0000',
        description: 'Boshra401',
        country: 'Boshra401',
        birth_date: 'Boshra401',
        category: 'Boshra401',
        address: 'Boshra401',
        rating: '3',
        profile_image: 'null',
        id: '20',
    };
    console.log(333333333333333,state.userData.id,newData)

    if (state.userData.loggedIn) {
      superagent
        .put(
          `https://robust-entity-homeway.herokuapp.com/volunteer/${state.userData.id}`
        )
        .send(newData)
        .then((response) => {
          cookie.save("profileData", response.body);
          console.log('Here is the updated data',response.body )
          setUser(cookie.load("profileData"));
          setLoading(false);
        });
    }
  }

  //////////////////////////////////////////////////

  if (!loading) {
    return (
      <>
        <h2>Update my Profile</h2>
        <form onSubmit={updateDataBase}>
          <TextField
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            defaultValue={user.first_name}
          />
          {/* <TextField
            id="lastName"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            defaultValue={user.last_name}
          /> */}

          {/* <label htmlFor="text"> Email </label>
          <input
            type="text"
            id="text3"
            name="email"
            defaultValue={`${user.email}`}
          />

          <label htmlFor="text"> Country </label>
          <input
            type="text"
            id="text4"
            name="country"
            defaultValue={user.country}
          />

          <label htmlFor="text"> Description </label>
          <input
            type="text5"
            id="text5"
            name="description"
            defaultValue={
              user.description ? user.description : "No description yet"
            }
          /> */}
         <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            update
          
          </Button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <p>Loading ........</p>
      </>
    );
  }
}

export default UpdateForm;
