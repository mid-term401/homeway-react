import "./App.css";
import Home from "./component/home/home";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import AboutUs from "./component/aboutUs/aboutUs";
import Profile from "./component/hostProfile/profile";
import SignIn from "./component/signIn/signIn";
import VolunteerSignup from "./component/signUp/volunteer";
import HostSignup from "./component/signUp/host";
import { Route, Switch } from "react-router-dom";
import UpdateVolunteerForm from "./component/volunteerProfile/updateVolunteerForm";
import UpdateHostForm from "./component/hostProfile/updateFormHost";

import { connect } from "react-redux";
import { getRemoteData, bearerAuth, updateRemoteData } from "./store/actions/thunk-action";
import { useSelector } from "react-redux";

function App(props) {
  const state = useSelector((state) => {
    return {
      userData: state.loggin,
      thunkReducer: state.thunkReducer,
    };
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/L'>
          <SignIn />
          <Home />
        </Route>
        <Route path={`/Profile/${state.userData.routeId}`} component={Profile}></Route>
        <Route exact path='/volunteers/sign_up' component={VolunteerSignup}></Route>
        <Route exact path='/hosts/sign_up' component={HostSignup}></Route>
        <Route exact path='/aboutUs' component={AboutUs}></Route>
        <Route exact path='/updateProfile' component={UpdateVolunteerForm}></Route>
        <Route exact path='/updateHostProfile' component={UpdateHostForm}></Route>
      </Switch>
      {/* <Search/> */}
      {/* <Volunteer/> */}
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.loggin, thunkReducer: state.thunkReducer };
};
const mapDispatchToProps = { getRemoteData, bearerAuth, updateRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
