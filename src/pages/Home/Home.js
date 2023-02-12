import "./Home.css";
import im from "../../sources/Home.jpeg";
import logo from "../../sources/home_logo.png";
import OurProj from "../../componets/ourProj/ourProj";
import geulim from '../../sources/Geulim.jpeg'
import meshahrerim from '../../sources/Meshahrerim.jpeg'
import halia from '../../sources/Halia.jpeg'
import { proj_names } from "../../constants/projects";
import { routes } from "../../constants/nav_bar";


const Home = () => {
  const description = `קבוצת יזמות נדל"ן הפועלת בתחום הבנייה למגורים והתחדשות עירונית, ובנייה בתחום המסחר, התעסוקה והתעשייה למעלה משני עשורים. `;
  const header = ` א.ים ארץ ומלואה נדל"ן בע"מ (מקבוצת מגדים)`;
  const ourProj = 'הפרוייקטים שלנו';
  const address = `באר שבע`;

  return (
    <div dir="rtl" className="Home">
      <div className="description">
        <h1>{header}</h1>
        <p className="description_text">{description}</p>
      </div>
      
      <div className="proj">
        <h1 className="head">{ourProj}</h1>
        <hr />
        <div className="allProj">
          <OurProj img={im} logo={logo} name={proj_names.green_garden} address={address} loc={routes.projects.ganim} /><br />
          <OurProj img={geulim} logo={logo} name={proj_names.geulim} address={address} loc={routes.projects.geulim}/><br />
          <OurProj img={meshahrerim} logo={logo} name={proj_names.meshahrerim} address={address} loc={routes.projects.meshahrerim}/><br />
          <OurProj img={halia} logo={logo} name={proj_names.haalia} address={address} loc={routes.projects.haalia}/><br />
        </div>
      </div>
    </div>
  );
};

export default Home;
