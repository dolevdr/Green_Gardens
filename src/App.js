import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./componets/nav-bar/nav-bar";
import Routing from "./Routes";
import FootNavBar from "./componets/FootNavBar/FootNavBar";
import Logo from './sources/Logo.png';

function App() {
  return (
    <div>
      <NavBar logo = {Logo}></NavBar>
      
      <Routing />

  
      <FootNavBar logo = {Logo}/>
    </div>
  );
}

export default App;
