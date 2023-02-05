import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import {proj_names} from "./constants/projects";
import { routes } from "./constants/nav_bar";

const Routing = () => {
  const about = `הפרויקט נוסד...`
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.projects.ganim} element={<Project name={proj_names.green_garden} text={about} />} />
      <Route path={routes.projects.geulim} element={<Project name={proj_names.geulim} text={about} />} />
      <Route path={routes.projects.meshahrerim} element={<Project name={proj_names.meshahrerim} text={about} />} />
      <Route path={routes.projects.haalia} element={<Project name={proj_names.haalia} text={about}/>} />
    </Routes>
  );
};

export default Routing;
