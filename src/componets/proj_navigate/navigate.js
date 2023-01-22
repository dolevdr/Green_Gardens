import "./navigate.css";
import Button from 'react-bootstrap/Button';


const Navigate = (props) => {
  return (
    <div id='n' style={{ direction: "rtl", width:'100%', height:'600px' }}>
      {props.categories.map((val, ind) => (
        <Button size="sm" variant="outline-dark"
          style={{ display: "block"}}
          className="border border-black"
          href={"#" + (ind + 1)}
        >
          {" "}
          {val}{" "}
        </Button>
      ))}
    </div>
  );
};

export default Navigate;
