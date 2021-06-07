import "./App.css";
import Home from "./component/home/home";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import SearchResults from "./component/searchResults/cards";
import SignIn from "./component/signIn/signIn";
import { Route, Switch } from "react-router-dom";
import Host from './component/hostProfile/host-haneen';
import Volunteer from './component/volunteerProfile/volunteer-haneen';
import Services from './component/Services-haneen/services';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
        <Route exact path='/LogIn' component={SignIn}>
          <Home />
          <SignIn />
        </Route>
        {/* <SearchResults /> */}
      </Switch>
      {/* <SignIn /> */}

      <Footer />
    </>
  );
}

export default App;
