import "./ourProj.css";
import Button from "react-bootstrap/Button";

const OurProj = (props) => {
  return (
    <div className="shadow ourproj_contain" dir="rtl">
      <div className="col-8 sh">
        <img className="img_ourproj"
          src={props.img}
          alt="nothing"
        />
      </div>
      <div className='col-3 sh text-center text_ourproj'>
        <img className="logo img_logo"  src={props.logo} alt="" />
        <br />
        <h5>{props.name}</h5>
        <h5>{props.address}</h5>
        <Button href={props.loc} className="b" variant="outline-success">לפרוייקט</Button>
      </div>
    </div>
  );
};

export default OurProj;
