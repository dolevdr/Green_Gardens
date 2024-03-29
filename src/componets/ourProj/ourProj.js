import "./ourProj.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

const OurProj = (props) => {
 const label = `לפרוייקט`;
 const navigate = useNavigate();
 
  return (
    <div className="shadow ourproj_contain rounded" dir="rtl">
      <img className="img_ourproj rounded"
          src={props.img}
          alt="nothing"
        />
      <div className='text-center centerY'>
        <img className="logo" src={props.logo} alt="" />
        <div ><b>{props.name}</b></div>
        <div ><b>{props.address}</b></div>
        <Button disabled={!props.active} className="text_ourproj" size="sm" onClick={()=>{navigate(props.loc);window.scrollTo(0,0)}} variant="outline-success">{label}</Button>
      </div>
    </div>
  );
};

export default OurProj;
