import "./ourProj.css";
import Button from "react-bootstrap/Button";

const OurProj = (props) => {
  return (
    <div className="shadow p" dir="rtl">
      <div className="col-8 sh">
        <img style={{position:'relative', top:'0px', width:'80%', height:'200px'}}
          src={props.img}
          alt="nothing"
        />
      </div>
      <div className='col-3 sh'>
        <img className="logo" style={{position:'relative', top:'0px', width:'100px', height:'100px'}} src={props.logo} alt="" />
        <br />
        <h4>{props.name}</h4>
        <h5>{props.address}</h5>
        <Button href="/project/Green_Graden" className="b" variant="outline-warning">לפרוייקט</Button>
      </div>
    </div>
  );
};

export default OurProj;
