import "./Home.css";
import im from "../../sources/Ganim Yerukim.jpeg";
import logo from "../../sources/home_logo.png";
import OurProj from "../../componets/ourProj/ourProj";
import geulim from "../../sources/Geulim.jpeg";
import meshahrerim from "../../sources/Meshahrerim.jpeg";
import halia from "../../sources/Halia.jpeg";
import kineret from "../../sources/migdal_kineret.jpeg";
import { proj_names } from "../../constants/projects";
import { routes } from "../../constants/nav_bar";
import { Button } from "react-bootstrap";
import Contact from "../Contact/Contact";

const Home = () => {
  const description = `א.ים ארץ ומלואה הינה קבוצת יזמות נדל"ן הפועלת בתחום הבנייה למגורים והתחדשות עירונית, ובנייה בתחום המסחר, התעסוקה והתעשייה למעלה משני עשורים. `;
  const header = `לבחור את `;
  const home = `הבית`;
  const ourProj = "הפרוייקטים שלנו";
  const address = `באר שבע`;
  const address_kineret = `המושבה מגדל`;
  const onClickProj = `לצפייה בפרוייקטים`;
  const header_contact = `השאירו פרטים וניצור \n עימכם קשר`;

  return (
    <div dir="rtl" className="Home">
      <div className="description">
        <div className="head_text">
          <span className="header_text">
            <b>
              {header}
              <span className="home_txt">{home}</span>
            </b>
          </span>
          <p className="description_text">{description}</p>
          <Button
            variant="warning"
            href="#ourP"
            className="nav_projects text-center"
          >
            {onClickProj}
          </Button>
        </div>
      </div>

      <div className="proj">
        <h1 className="head" id="ourP">
          {ourProj}
        </h1>
        <hr />
        <div className="allProj">
          <OurProj
            img={im}
            logo={logo}
            name={proj_names.green_garden}
            address={address}
            loc={routes.projects.ganim}
            active={true}
          />
          <OurProj
            img={meshahrerim}
            logo={logo}
            name={proj_names.ground_floor}
            address={address}
            loc={routes.projects.ground_floor}
            active={false}
          />
          <OurProj
            img={geulim}
            logo={logo}
            name={proj_names.geulim}
            address={address}
            loc={routes.projects.geulim}
            active={false}
          />
          <OurProj
            img={halia}
            logo={logo}
            name={proj_names.geulim_5}
            address={address}
            loc={routes.projects.geulim_5}
            active={false}
          />
          <OurProj
            img={kineret}
            logo={logo}
            name={proj_names.migdal}
            address={address_kineret}
            loc={routes.projects.migdal}
            active={false}
          />
        </div>
      </div>
      <div className="contactUs">
        <Contact header={header_contact} />
      </div>
    </div>
  );
};

export default Home;
