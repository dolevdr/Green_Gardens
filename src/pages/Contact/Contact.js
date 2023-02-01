import { useRef, useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from '@emailjs/browser';

const Contact = () => {
  
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

  return (
    <div dir="rtl" className="formText row container_contact">
      {!submited ? (
        <Form ref={form} onSubmit={sendEmail}>
          <h1>צור קשר</h1>
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
        <div className="after_submit">
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
