import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import superagent from "superagent";
import { NavLink } from "react-router-dom";
import cookie from "react-cookies";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


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
        // console.log(1111111111111, response.body);
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

    // console.log(333333333333333, newData);

    if (state.userData.loggedIn) {
      let newData = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        user_name: document.getElementById("user_name").value,
        description: document.getElementById("description").value,
        country: document.getElementById("country").value,
        birth_date: user.birth_date,  
        address: user.address,
        rating: user.rating,
        profile_image: user.profile_image,
        id: user.id,
        passport: user.passport,
        password: user.password,
        skills: user.skills,
        email: document.getElementById("email").value,
      };
      console.log(state.userData.cookie)
      update(newData)


    }
  }

  function update(newData){
    superagent
    .put(
      `https://robust-entity-homeway.herokuapp.com/volunteer/${state.userData.id}`
    )
    .set("authorization",state.userData.cookie)
    .send(newData)
    .then((response) => {
      cookie.save("profileData2", response.body);
      console.log('Here is the updated data',response.body )
      setUser(cookie.load("profileData2"));
      setLoading(false);
    }).catch(error=>{
      console.log('error in updating value', error)
    });
  }

  //////////////////////////////////////////////////

//////////////////////////////////////////////////////
  if (!loading) {
    return (
      <>
        <form onSubmit={updateDataBase}>


        <TextField
            id="user_name"
            name="user_name"
            label="user name"
            variant="outlined"
            id="user_name"
            defaultValue={user.user_name}
          />



          <TextField
            id="firstName"
            name="first_name"
            label="First name"
            variant="outlined"
            id="first_name"
            defaultValue={user.first_name}
          />
          <TextField
            id="lastName"
            name="lastname"
            label="Last name"
            variant="outlined"
            id="last_name"
            defaultValue={user.last_name}
          />

          <TextField
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            defaultValue={user.email}
          />

          <TextField
            id="country"
            name="country"
            label="Country"
            variant="outlined"
            id="country"
            defaultValue={user.country}
          />

          <TextField
            id="email"
            name="email"
            label="E mai;"
            variant="outlined"
            id="email"
            defaultValue={user.email}
          />

          <TextField
            id="description"
            name="description"
            label="description"
            variant="outlined"
            id="description"
            defaultValue={
              user.description ? user.description : "No description yet"
            }
          />
        
          <Button type="submit" variant="contained" color="primary">
            update
          </Button>
          <NavLink exact  to="/Profile"> Go back to profile </NavLink>

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


// address: "Amman-Tabarbour"
// birth_date: "1994-12-12T00:00:00.000Z"
// country: "syria"
// description: null
// email: "boshrav"
// first_name: "boshra"
// id: 20
// last_name: "jaber"
// passport: null
// password: "$2b$10$4czuDExQYiBR9ilW0HN86.3e0zXnwrfsNcUyrHk5wQld0QXWDwRYe"
// profile_image: null
// rating: null
// skills: null
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiJib3NocmF2Iiwicm9sZSI6InZvbHVudGVlciIsImlhdCI6MTYyMzI0ODk1Nn0.IdO4JQ_GCw1RjUpd6Po3urpXGB5tYzPA0voBEX9RqtU"
// user_name: "boshrav

// req.body.user_name,
// req.body.first_name,
// req.body.last_name,
// req.body.password,
// req.body.description,
// req.body.country,
// req.body.birth_date,
// req.body.skills,
// req.body.address,
// req.body.rating,
// req.body.profile_image,
// req.body.passport,
// req.body.email,
// id,