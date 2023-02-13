import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import {proj_names} from "./constants/projects";
import { routes } from "./constants/nav_bar";
import main from "./sources/Ganim Yerukim.jpeg";


const Routing = () => {
  const about = `הפרויקט ממוקם בשכונת פארק נחל באר שבע, בלב השכונה בקו הראשון לפארק ולאגם המלאכותי הגדול בישראל. בפרויקט שישה בניינים בני חמש קומות, הכוללים בין תשע לעשר דירות בכל בניין, בנות 3 חדרים, 4 חדרים, 5 חדרים, דירות גן ודירות גג (פנטהאוז) בכל קומה שתי דירות בלבד, למעט דירות הגן ודירות הפנטהוז שהן דירות יחידות בקומה. בכל הדירות מרפסות מרווחות המשקיפות לפארק ולאגם. החניון תת קרקעי עם הכנה לעמדות טעינה לרכב חשמלי. שכונת פארק נחל באר שבע, כוללת פארק עצום בגודלו עם מתקני ספורט רבים ומגוונים וטיילת המקיפה את כל הפארק, השכונה מוקפת במרכזי קניות, בילוי, תחבורה, מסחר, תעסוקה, וקרובה מאוד לכביש 6.`
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.projects.ganim} element={<Project name={proj_names.green_garden} text={about} openImg={main} />} />
      <Route path={routes.projects.geulim} element={<Project name={proj_names.geulim} text={about} />} />
      <Route path={routes.projects.meshahrerim} element={<Project name={proj_names.meshahrerim} text={about} />} />
      <Route path={routes.projects.haalia} element={<Project name={proj_names.haalia} text={about}/>} />
    </Routes>
  );
};

export default Routing;
