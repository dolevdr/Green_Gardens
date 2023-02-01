import "./specification.css";
import { BsArrowLeftShort, BsArrowReturnLeft, BsArrowDownShort } from "react-icons/bs";
import { useState } from "react";

const Specification = (props) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="">
        <div className="display_list" onClick={()=> setDisplay(!display)}>{!display?<BsArrowLeftShort />:<BsArrowDownShort />} {props.head} </div><hr className="hr_style"/>
      {display &&
        props.list.map((value, index) => (
          <div className="list_item" key={index}>
            <BsArrowReturnLeft /> <span className="span_style"></span> {value}{" "}
          </div>
        ))}
    </div>
  );
};

export default Specification;
