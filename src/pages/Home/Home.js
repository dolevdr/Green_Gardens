import "./Home.css";
import im from "../../sources/Home.jpeg";
import logo from "../../sources/logo.jpeg";
import OurProj from "../../componets/ourProj/ourProj";
import geulim from '../../sources/Geulim.jpeg'
import meshahrerim from '../../sources/Meshahrerim.jpeg'
import halia from '../../sources/Halia.jpeg'


const Home = () => {
  const description = `קבוצת יזמות ובנייה אשר החלה פעילותה לפני למעלה משני עשורים.\n מיום היווסדה, פעלה הקבוצה בהיקפים נרחבים בתחום הנדל"ן, ההשקעות והמסחר. `;
  const header = ` א.ים ארץ ומלואה נדלן בע"מ (מקבוצת מגדים)`;

  return (
    <div className="Home" style={{height:'100vh'}}>
      <div className="description">
        <h1>{header}</h1>
        <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      </div>
      
      <div className="proj" style={{ position: "relative", top: "10%" }}>
        <h1 className="head">הפרוייקטים שלנו</h1>
        <hr />
        <div style={{position: "relative", right: "5%" }}>
          <OurProj img={im} logo={logo} name="גנים ירוקים" address="באר שבע" loc='/project/Green_Graden'/><br />
          <OurProj img={geulim} logo={logo} name="גאולים 15" address="באר שבע" loc='project/Geulim'/><br />
          <OurProj img={meshahrerim} logo={logo} name="המשחררים" address="באר שבע" loc='project/Meshahrerim'/><br />
          <OurProj img={halia} logo={logo} name="העלייה" address="באר שבע" loc='project/Haalia'/><br />
        </div>
      </div>
    </div>
  );
};

export default Home;
