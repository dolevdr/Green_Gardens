import "./navigate.css";
import Button from 'react-bootstrap/Button';


const Navigate = (props) => {
  return (
    <div dir="rtl" id='n' >
      {props.categories.map((val, ind) => (
        <Button variant="outline-dark"
          
          className="border border-info button_bootstrap"
          href={"#" + (ind + 1)}
          key={ind}
        >
          {" "}
          {val}{" "}
        </Button>
      ))}
    </div>
  );
};

export default Navigate;
