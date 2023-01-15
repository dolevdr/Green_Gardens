import { useRef, useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from '@emailjs/browser';
// import axios from "axios";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [proj, setProj] = useState("");
  const [submited, setSubmit] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3j95hjh', 'template_k974vwk', form.current, 'pKUL_9yOnRc8hc3le')
      .then((result) => {
          console.log(result.text);
          setSubmit(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  // const sumbitForm = async () => {
  //   setSubmit(true);
  //   // await axios.post("http://localhost:3001/contact", {
  //   //   name: name,
  //   //   phone: phone,
  //   //   proj: proj,
  //   // });
  // };
  // const handleName = (v) => {
  //   setName(v);
  // };
  // const handlePhone = (v) => {
  //   setPhone(v);
  // };
  // const handleProj = (v) => {
  //   setProj(v);
  // };
  return (
    <div className="formText row">
      {!submited ? (
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
            <Form.Label >שם מלא:</Form.Label>
            <Form.Control
              name="to_name"
              // onChange={handleName}
              required
              type="text"
              placeholder="שם מלא..."
            />
            <Form.Label>פרוייקט:</Form.Label>
            <Form.Select name="poj_name" >
              <option value="הגאולים 15">הגאולים 15</option>
              <option value="התחדשות עירונית - המשחררים">התחדשות עירונית - המשחררים</option>
              <option value="התחדשות עירונית - העלייה">התחדשות עירונית - העלייה</option>
            </Form.Select>
            <Form.Label>מספר טלפון:</Form.Label>
            <Form.Control
              name="phone_num"
              
              required
              type="text"
              placeholder="טלפון..."
            />
            <Button variant="primary" type="submit" >
              שלח
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <div style={{ position:'relative', right:'7%', top:'50px'}}>
          <h1>
            <b>תודה על יצירת הקשר</b>
          </h1>
          <p>
            אחד מנציגנו יצור עמך קשר לגבי הפרוייקט.<br />בכל שאלה ניתן ליצור קשר דרך המייל או הטלפון
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
