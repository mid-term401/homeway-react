import "./App.css";
import Home from "./component/home/home";
import Header from "./component/header/header";
// import Footer from "./component/footer/footer";
// import HostProfile from "./component/hostProfile/host";
import Profile from "./component/hostProfile/profile";
import SignIn from "./component/signIn/signIn";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getRemoteData, bearerAuth, updateRemoteData } from "./store/actions/thunk-action";
import VolunteerSignUp from "./component/signUp/volunteer";
import HostSignUp from "./component/signUp/host";

function App() {
  return (
    <>
      <Header />
      {/* <VolunteerSignUp/> */}
      {/* <HostSignUp/> */}
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/L'>
          <SignIn />
          <Home />
        </Route>
        <Route exact path='/Profile' component={Profile}></Route>
        <Route exact path='/volunteer/sign_up' component={VolunteerSignUp}></Route>
        <Route exact path='/hosts/sign_up' component={HostSignUp}></Route>
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
