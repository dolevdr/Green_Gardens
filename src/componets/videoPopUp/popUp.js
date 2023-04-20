/* eslint-disable jsx-a11y/anchor-has-content */
import "./popUp.css";
import video_calcalist from "../../sources/video_calcalist.mp4";
import calcalist from "../../sources/calcalist.jpeg";
import BlinkingText from "../blink/blink-text";
const PopUp = (props) => {
  return (
    <div className="Popup">
      <span className="X" onClick={() => props.changeOpen(false)}>
        X
      </span>
      <div className="content">
        <video width={"50%"} height={"100%"} controls>
          <source src={video_calcalist} type="video/mp4" />
        </video>
        <img className="calcalist" src={calcalist} alt="" />
      </div>
      <div className="hyper">
        <a href="https://m.calcalist.co.il/Article.aspx?guid=sy00llmuwh&utm_source=m.calcalist.co.il&utm_medium=Share&utm_term=sy00llmuwh&utm_campaign=whatsapp">
          <BlinkingText text={" לכתבה המלאה >> "}></BlinkingText>
        </a>
      </div>
      {/* <a dir="rtl" className="hyper"  href="https://m.calcalist.co.il/Article.aspx?guid=sy00llmuwh&utm_source=m.calcalist.co.il&utm_medium=Share&utm_term=sy00llmuwh&utm_campaign=whatsapp">לכתבה המלאה {'>>'} </a> */}
    </div>
  );
};

export default PopUp;
