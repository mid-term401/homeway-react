import "./App.css";
import Home from "./component/home/home";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import HostProfile from "./component/hostProfile/host-haneen";
import SearchResults from "./component/searchResults/cards";
import SignIn from "./component/signIn/signIn";
import { Route, Switch } from "react-router-dom";

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
        <Route exact path='/AboutUs' component={HostProfile}></Route>
      </Switch>

      {/* <Footer /> */}
    </>
  );
}

export default App;
