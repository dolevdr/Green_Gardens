import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./componets/nav-bar/nav-bar";
import Routing from "./Routes";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      
      <Routing />
    </div>
  );
}

export default App;
