import "./Home.css";
import im from "../../sources/Home.jpeg";

const Home = () => {
  const description = `קבוצת יזמות ובנייה אשר החלה פעילותה לפני למעלה משני עשורים.\n מיום היווסדה, פעלה הקבוצה בהיקפים נרחבים בתחום הנדל"ן, ההשקעות והמסחר. `;
  const header = "א.ים ארץ ומלואה";

  return (
    <div className="Home">
      <div className="description">
        <h1>{header}</h1>
        <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      </div>
      
        <img src={im} alt="nothing" />
    </div>
  );
};

export default Home;
