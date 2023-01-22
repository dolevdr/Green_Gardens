import "./specification.css";
import { BsArrowLeftShort, BsArrowReturnLeft, BsArrowDownShort } from "react-icons/bs";
import { useState } from "react";

const Specification = (props) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="">
        <div style={{cursor:'pointer'}} onClick={()=> setDisplay(!display)}>{!display?<BsArrowLeftShort />:<BsArrowDownShort />} {props.head} </div><hr style={{borderTop: '1px dotted'}}/>
      {display &&
        props.list.map((value, index) => (
          <div style={{ display:'flex'}} key={index}>
            <BsArrowReturnLeft /> <span style={{margin:'10px'}}></span> {value}{" "}
          </div>
        ))}
    </div>
  );
};

export default Specification;
