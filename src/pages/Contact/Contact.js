import { useRef, useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from '@emailjs/browser';
import { proj_names } from "../../constants/projects";
import { email_contact } from "../../constants/contact";
import { service } from "../../constants/service";

const Contact = () => {
  const thanks = 'תודה על יצירת הקשר';
  const thanks_text = `אחד מנציגנו יצור עמך קשר לגבי הפרוייקט.\nבכל שאלה ניתן ליצור קשר דרך המייל או הטלפון`;
  const error = `בבקשה תמלא `;
  const [submited, setSubmit] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    const form_valid = e.currentTarget;
    if (form_valid.checkValidity() === false) {
      e.stopPropagation();
    }
    else{
      emailjs.sendForm(service.SERVICEID, service.TEMPLATEID, form.current, service.PUBLICKEY)
        .then((result) => {
            console.log(result.text);
            setSubmit(true);
        }, (error) => {
            console.log(error.text);
        });
      };
      e.preventDefault();
      setValidated(true);
      
    }
  const [validated, setValidated] = useState(false);

  


  return (
    <div dir="rtl" className="formText row container_contact">
      {!submited ? (
        <Form ref={form} onSubmit={sendEmail} validated={validated} noValidate>
          <h1>צור קשר</h1>
          <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
            <Form.Label >{email_contact.fullName}:  <b className="require"> *</b></Form.Label>
            <Form.Control
              name="to_name"
              required
              type="text"
              placeholder="שם מלא..."
            />
            <Form.Control.Feedback>
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {error}{email_contact.fullName}
            </Form.Control.Feedback>
            <Form.Label>{email_contact.project}: <b className="require"> *</b></Form.Label>
            <Form.Select name="poj_name" >
              <option value={proj_names.geulim}>{proj_names.geulim}</option>
              <option value={proj_names.meshahrerim}>{proj_names.meshahrerim}</option>
              <option value={proj_names.haalia}>{proj_names.haalia}</option>
            </Form.Select>
            <Form.Label>{email_contact.phone}: <b className="require"> *</b></Form.Label>
            <Form.Control
              name="phone_num"
              
              required
              type="number"
              placeholder="טלפון..."
            />
            {submited ?
            <Form.Control.Feedback>
            </Form.Control.Feedback>
            :
            <Form.Control.Feedback type="invalid">
              {error}{email_contact.phone}
            </Form.Control.Feedback>

            }
            <Button variant="primary" type="submit"  >
              שלח
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <div className="after_submit">
          <h1>
            <b>{thanks}</b>
          </h1>
          <p>
            {thanks_text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
