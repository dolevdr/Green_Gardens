import "./Home.css";
import im from "../../sources/Home.jpeg";
import logo from "../../sources/logo.jpeg";
import OurProj from "../../componets/ourProj/ourProj";

const Home = () => {
  const description = `קבוצת יזמות ובנייה אשר החלה פעילותה לפני למעלה משני עשורים.\n מיום היווסדה, פעלה הקבוצה בהיקפים נרחבים בתחום הנדל"ן, ההשקעות והמסחר. `;
  const header = ` א.ים ארץ ומלואה נדלן בע"מ (מקבוצת מגדים)`;

  return (
    <div className="Home">
      <div className="description">
        <h1>{header}</h1>
        <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      </div>
      {/* <div style={{height:'100%'}}>
        <img src={im} alt="nothing" />
      </div> */}
      <div className="proj" style={{ position: "relative", top: "300px" }}>
        <h1 className="head">הפרוייקטים שלנו</h1>
        <hr />
        <div style={{position: "relative", right: "10%" }}>
          <OurProj img={im} logo={logo} name="גנים ירוקים" address="באר שבע" />
        </div>
      </div>
    </div>
  );
};

export default Home;
