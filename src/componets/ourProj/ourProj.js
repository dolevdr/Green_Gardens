import "./ourProj.css";
import Button from "react-bootstrap/Button";

const OurProj = (props) => {
 const label = `לפרוייקט`;
 
  return (
    <div className="shadow ourproj_contain rounded" dir="rtl">
      <div className="col-8 sh">
        <img className="img_ourproj rounded"
          src={props.img}
          alt="nothing"
        />
      </div>
      <div className='col-3 sh text-center centerY'>
        <img className="logo img_logo "  src={props.logo} alt="" />
        <br />
        <div ><b>{props.name}</b></div>
        <div ><b>{props.address}</b></div>
        <Button className="text_ourproj" href={props.loc} variant="outline-success">{label}</Button>
      </div>
    </div>
  );
};

export default OurProj;
