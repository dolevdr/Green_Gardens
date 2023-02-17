import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import {proj_names} from "./constants/projects";
import { routes } from "./constants/nav_bar";
import main from "./sources/Ganim Yerukim.jpeg";
import logo from "./sources/home_logo.png";
import mabatAl from "./sources/Mabat Al.jpeg";
import loc from "./sources/location.jpeg";
import { ganim_departments, ganim_specification, open, imaging, about } from "./constants/Ganim";




const Routing = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.projects.ganim} element={<Project name={proj_names.green_garden} text={about} openImg={main} specification={ganim_specification} department={ganim_departments} logo={logo} open={open} above={mabatAl} imaging={imaging} location={loc}/> } />
      <Route path={routes.projects.geulim} element={<Project name={proj_names.geulim} text={"על הפרוייקט"} />} />
      <Route path={routes.projects.meshahrerim} element={<Project name={proj_names.meshahrerim} text={"על הפרוייקט"} />} />
      <Route path={routes.projects.haalia} element={<Project name={proj_names.haalia} text={"על הפרוייקט"} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
