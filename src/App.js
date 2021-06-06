import React, { useState } from "react";
import axios from "axios";
import './App.css';
import SignUpFormHost from './component/signUp/host'
import SignUpVolunteer from './component/signUp/volunteer'
import Signin from './component/signIn/signIn'
import SearchForm from './component/home/search-boshra'
import SearchDisplay from './component/searchResults/details-boshra'
import VolunteerProfile from './component/volunteerProfile/volunteer'
import ContactUs from  './component/contactUs/contactUs-boshra'
import Tweet from './component/home/Tweets'
import VlounteerProfile from './component/volunteerProfile/volunteerProfileSamer'

function App() {



  return (
  <>
  

  <Signin/>
  <VlounteerProfile/>

    </>
  )
}

// Haneen code:

{/* <div className="App">
<header className="App-header">
 <SignUpFormHost/>

</header>

<header className="App-header">
 <SignUpVolunteer/>
</header>


</div> */}

export default App;
