import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project/Green_Graden" element={<Project name="גנים ירוקים" text="הפרויקט נוסד..."/>} />
      <Route path="/project/Geulim" element={<Project name="גאולים 15" text="הפרויקט נוסד..." />} />
      <Route path="/project/Meshahrerim" element={<Project name="התחדשות עירונית - המשחררים" text="הפרויקט נוסד..." />} />
      <Route path="/project/Haalia" element={<Project name="התחדשות עירונית - העליה" text="הפרויקט נוסד..."/>} />
    </Routes>
  );
};

export default Routing;
