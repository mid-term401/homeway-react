import "./App.css";
import Home from "./component/home/home";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import HostProfile from "./component/hostProfile/host";
import Profile from "./component/hostProfile/profile";
import VolunteerProfile from "./component/volunteerProfile/volunteer";
import SearchResults from "./component/searchResults/cards";
import SignUpVol from "./component/signUp/volunteer";
import SignIn from "./component/signIn/signIn";
import { Route, Switch } from "react-router-dom";
import { If, Else, Then } from "react-if";

import { connect } from "react-redux";
import { getRemoteData, bearerAuth, updateRemoteData } from "./store/actions/thunk-action";

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/L'>
          <SignIn />
          <Home />
        </Route>
        {/* <If condition={props.userData.isHost}>
          <Then>
            <Route exact path='/Profile' component={HostProfile}></Route>
          </Then>
          <Else>
            <If condition={props.userData.isVolunteer}> */}
        <Route exact path='/Profile' component={Profile}></Route>
        {/* </If>
          </Else>
        </If> */}
      </Switch>

      {/* <Footer /> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.loggin, thunkReducer: state.thunkReducer };
};
const mapDispatchToProps = { getRemoteData, bearerAuth, updateRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
