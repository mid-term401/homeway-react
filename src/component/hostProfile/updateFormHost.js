import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import superagent from "superagent";
import { NavLink } from "react-router-dom";
import cookie from "react-cookies";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function UpdateHostForm() {
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
      .get(`https://robust-entity-homeway.herokuapp.com/host/${state.userData.id}`)
      .set("authorization", `${state.userData.cookie}`)
      .then((response) => {
        cookie.save("profileData", response.body);
        setUser(cookie.load("profileData"));
        console.log(1111111111111, response.body);
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

    console.log(333333333333333, newData);

    if (state.userData.loggedIn) {
      let newData = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        user_name: document.getElementById("user_name").value,
        description: document.getElementById("description").value,
        country: document.getElementById("country").value,
        birth_date: user[0].birth_date,
        address: user[0].address,
        rating: user[0].rating,
        profile_image: user[0].profile_image,
        id: user[0].id,
        password: user[0].password,
        skills: user.skills,
        email: document.getElementById("email").value,
      };
      console.log(state.userData.newData);
      update(newData);
    }
  }

  function update(newData) {
    superagent
      .put(`https://robust-entity-homeway.herokuapp.com/host/${state.userData.id}`)
      .set("authorization", state.userData.cookie)
      .send(newData)
      .then((response) => {
        cookie.save("profileData2", response.body);
        console.log("Here is the updated data", response.body);
        setUser(cookie.load("profileData2"));
        setLoading(false);
      })
      .catch((error) => {
        console.log("error in updating value", error);
      });
  }

  //////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  if (!loading) {
    return (
      <>
        <form onSubmit={updateDataBase}>
          <TextField
            id='user_name'
            name='user_name'
            label='user name'
            variant='outlined'
            id='user_name'
            defaultValue={user[0].user_name}
          />

          <TextField
            id='firstName'
            name='first_name'
            label='First name'
            variant='outlined'
            id='first_name'
            defaultValue={user[0].first_name}
          />
          <TextField
            id='lastName'
            name='lastname'
            label='Last name'
            variant='outlined'
            id='last_name'
            defaultValue={user[0].last_name}
          />

          <TextField
            id='email'
            name='email'
            label='E-mail'
            variant='outlined'
            defaultValue={user[0].email}
          />

          <TextField
            id='country'
            name='country'
            label='Country'
            variant='outlined'
            id='country'
            defaultValue={user[0].country}
          />

          <TextField
            id='email'
            name='email'
            label='E mai;'
            variant='outlined'
            id='email'
            defaultValue={user[0].email}
          />

          <TextField
            id='category'
            name='category'
            label='category'
            variant='outlined'
            id='category'
            defaultValue={user[0].category}
          />

          <TextField
            id='description'
            name='description'
            label='description'
            variant='outlined'
            id='description'
            defaultValue={user[0].description ? user[0].description : "No description yet"}
          />

          <Button type='submit' variant='contained' color='primary'>
            update
          </Button>
          <NavLink exact to='/Profile'>
            {" "}
            Go back to profile{" "}
          </NavLink>
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

export default UpdateHostForm;

// address: "s"
// birth_date: "2021-12-12T00:00:00.000Z"
// category: "test1"
// country: "s"
// description: null
// email: "tynntnghn"
// first_name: "samer"
// id: 10
// last_name: "alnajjar"
// password: "$2b$10$7ETB/hEVwX3rVIhhmuz4c.vJ60a.twsmE3l0GmpXZL5VPR8V2mK.K"
// profile_image: null
// rating: null
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm5hbWUiOiI0NDQ0Iiwicm9sZSI6Imhvc3QiLCJpYXQiOjE2MjMyNjEzMzF9.UH8Gd5kF_H1vJwCNQ51ji0Jxl_61KHklZAgFiGcD0-g"
// user_name: "4444"

// req.body.user_name,
// req.body.first_name,
// req.body.last_name,
// req.body.password,
// req.body.description,
// req.body.country,
// req.body.birth_date,
// req.body.category,
// req.body.address,
// req.body.rating,
// req.body.profile_image,
// id,
