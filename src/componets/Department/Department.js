import "./Department.css";
import { BsFillHouseFill, BsDoorOpenFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Department = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow Cont text-center">
      <div
        className="text-center"
        style={{ filter: `brightness(40%)`, cursor: "pointer" }}
      >
        <img
          className="Pic"
          src={props.pic}
          alt="nothing"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="type text-center">
        <b>{props.type}</b>
      </div>
      <div className="text-center">
        <h1 style={{ fontSize: "20px", position: "relative", top: "-50px" }}>
          {props.name}
        </h1>
        <div className="data">
          <p>
            {" "}
            <BsFillHouseFill /> {props.house}
          </p>
          <p>
            {" "}
            <BsDoorOpenFill /> {props.porch}
          </p>
        </div>
        {isOpen && (
          <Modal show={isOpen} onHide={() => setIsOpen(false)}>
            <Modal.Header closeButton onClick={() => setIsOpen(false)}>
              <Modal.Title dir="rtl" className="text-right col-11">תוכנית העמדה - {props.type}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <img className="text-center" style={{position:'relative', top:'0px', width:'100%'}} src={props.pic} alt="nothing" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Department;
