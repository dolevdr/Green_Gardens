import "./ourProj.css";
import Button from "react-bootstrap/Button";

const OurProj = (props) => {
  return (
    <div className="shadow " style={{width:'90%', height:'400px'}} dir="rtl">
      <div className="col-8 sh">
        <img style={{position:'relative', top:'0px', width:'80%', height:'400px'}}
          src={props.img}
          alt="nothing"
        />
      </div>
      <div className='col-3 sh text-center' style={{position:'relative', top:'10%'}}>
        <img className="logo" style={{position:'relative', top:'0px', width:'150px', height:'150px'}} src={props.logo} alt="" />
        <br />
        <h4>{props.name}</h4>
        <h5>{props.address}</h5>
        <Button href={props.loc} className="b" variant="outline-warning">לפרוייקט</Button>
      </div>
    </div>
  );
};

export default OurProj;