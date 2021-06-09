import "./App.css";
import Home from "./component/home/home";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import AboutUs from "./component/aboutUs/aboutUs";
import Profile from "./component/hostProfile/profile";
import SignIn from "./component/signIn/signIn";
import Volunteer from "./component/volunteerProfile/volunteer";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getRemoteData, bearerAuth, updateRemoteData } from "./store/actions/thunk-action";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/L'>
          <SignIn />
          <Home />
        </Route>
        <Route exact path='/Profile' component={Profile}></Route>
        <Route exact path='/aboutUs' component={AboutUs}></Route>
      </Switch>

      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.loggin, thunkReducer: state.thunkReducer };
};
const mapDispatchToProps = { getRemoteData, bearerAuth, updateRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
