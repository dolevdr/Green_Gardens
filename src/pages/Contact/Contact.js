import { useRef, useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { proj_names } from "../../constants/projects";
import { email_contact } from "../../constants/contact";
import { company_name } from "../../constants/company";
import { service } from "../../constants/service";
import Logo_img from "../../sources/Logo.png";

const Contact = (props) => {
  const thanks = "תודה על יצירת הקשר";
  const thanks_text = `אחד מנציגנו יצור עמך קשר בהקדם.`;
  const error = `בבקשה תמלא `;
  const contact = props.header;
  const [submited, setSubmit] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    const form_valid = e.currentTarget;
    if (form_valid.checkValidity() === false) {
      e.stopPropagation();
    } else {
      emailjs
        .sendForm(
          service.SERVICEID,
          service.TEMPLATEID,
          form.current,
          service.PUBLICKEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmit(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    e.preventDefault();
    setValidated(true);
  };
  const [validated, setValidated] = useState(false);

  return (
    <div dir="rtl" className="row container_contact">
      {!submited ? (
        <Form className="form_container" ref={form} onSubmit={sendEmail} validated={validated} noValidate>
          {(contact === 'צור קשר') ? <h1 className="contacts_head">{contact}</h1> : <h2 className="contacts_head">{contact}</h2> }
          <Form.Group className="mb-3 col-12 text-center" controlId="formBasicEmail">
            <Form.Label className="label_value col-1">
              {email_contact.fullName}: <b className="require"> *</b>
            </Form.Label>
            <Form.Control
              className="label_value col-6"
              name="to_name"
              required
              type="text"
              placeholder="שם מלא..."
            />
            <Form.Control.Feedback className="label_value feedback"></Form.Control.Feedback>
            <Form.Control.Feedback className="label_value feedback" type="invalid">
              {error}
              {email_contact.fullName}
            </Form.Control.Feedback><br />
            <Form.Label className="label_value col-1">
              {email_contact.email}: <b className="require"> *</b>
            </Form.Label>
            <Form.Control
              className="label_value col-6"
              name="email"
              required
              type="email"
              placeholder="מייל..."
            /><br />
            {submited ? (
              <Form.Control.Feedback className="label_value feedback"></Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback className="label_value feedback" type="invalid">
                {error}
                {email_contact.email}
              </Form.Control.Feedback>
            )}
            <Form.Label className="label_value col-1">
              {email_contact.project}: <b className="require"> *</b>
            </Form.Label>
            <Form.Select name="poj_name" className="label_value col-6">
              <option value={proj_names.geulim}>{proj_names.geulim}</option>
              <option value={proj_names.ground_floor}>
                {proj_names.ground_floor}
              </option>
              <option value={proj_names.geulim_5}>{proj_names.geulim_5}</option>
            </Form.Select>
            <Form.Label className="label_value col-1">
              {email_contact.phone}: <b className="require"> *</b>
            </Form.Label>
            <Form.Control
              className="label_value col-6"
              name="phone_num"
              required
              type="number"
              placeholder="טלפון..."
            /><br />
            {submited ? (
              <Form.Control.Feedback className="label_value feedback"></Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback className="label_value feedback" type="invalid">
                {error}
                {email_contact.phone}
              </Form.Control.Feedback>
            )}
            <Button className="label_value butt_s" variant="primary" type="submit">
              שלח
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <div className="after_submit text-center">
          <h1 className="thanks">
            <b>{thanks}</b>
          </h1>{" "}
          <p className="thanks_text">{thanks_text}</p>
          <div className="company_logo text-center">
            <img src={Logo_img} alt="nothing" />
            <b>{company_name}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
