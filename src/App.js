import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./componets/nav-bar/nav-bar";
import Routing from "./Routes";
import FootNavBar from "./componets/FootNavBar/FootNavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      
      <Routing />

  
      <FootNavBar/>
    </div>
  );
}

export default App;
