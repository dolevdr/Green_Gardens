import "./Department.css";
import { BsFillHouseFill } from "react-icons/bs";
import { MdBalcony, MdYard } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Department = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const header = `תוכנית העמדה - ${props.type}`;

  return (
    <div className="shadow Cont rounded text-center">
      <div className="text-center pic_open">
        <img
          className="Pic rounded"
          src={props.pic}
          alt="nothing"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="type text-center">
        <b>{props.type}</b>
      </div>
      <div className="text-center">
        <div className="body_dep"><b>{props.name}</b></div>
        <div className="data">
          <p>
            {" "}
            <BsFillHouseFill /> {props.house}
          </p>
          {props.porch ? (
            <p>
              <MdBalcony /> {props.porch}
            </p>
          ) : (
            <p>
              <MdYard /> {props.garden}{" "}
            </p>
          )}
        </div>
        {isOpen && (
          <Modal show={isOpen} onHide={() => setIsOpen(false)}>
            <Modal.Header closeButton onClick={() => setIsOpen(false)}>
              <Modal.Title dir="rtl" className="text-right col-11">
                {header}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="text-center img_modal"
                src={props.pic}
                alt="nothing"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                סגור
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Department;
