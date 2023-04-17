import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./componets/nav-bar/nav-bar";
import Routing from "./Routes";
import FootNavBar from "./componets/FootNavBar/FootNavBar";
import Logo from "./sources/Logo.png";
import { useCallback, useState } from "react";
import PopUp from "./componets/videoPopUp/popUp";

function App() {
  const [openVideo, setOpenVideo] = useState(false);

  const handleOpen = useCallback(() => {
    setOpenVideo(true);
  }, []);

  const classOpen = !openVideo ? "" : "openVideo";
  return (
    <div>
        <div className={classOpen} >
          <NavBar open={handleOpen} logo={Logo}></NavBar>
          <body className={classOpen}>
            <Routing />
          </body>

          <FootNavBar logo={Logo} />
        </div>
      {openVideo && (
        <PopUp changeOpen={setOpenVideo}></PopUp>
      )}
    </div>
  );
}

export default App;
