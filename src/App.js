import logo from './logo.svg';
import SignUpFormHost from './component/signUp/host'
import SignUpVolunteer from './component/signUp/volunteer'




import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SignUpFormHost/>
      
      </header>
      
      <header className="App-header">
       <SignUpVolunteer/>
      </header>

     
    </div>


  );
}

export default App;
