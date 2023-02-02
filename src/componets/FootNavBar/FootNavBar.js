import { contact, contact_val } from "../../constants/contact";
import "./FootNavBar.css";

const FootNavBar = () => {
  const office = 'המשרד שלנו';

  return (
    <div dir="rtl" >
      <div className="row col-12 shadow-lg mb-5 rounded contain_navbar" >

        <div className="office col-4 body_foot" >
          <p>
            <u>{office}</u>:{" "}
          </p>
          <br />
          <p>
            <b>{contact.address}: </b>{contact_val.address}
          </p>
          <p>
            <b>{contact.phone}: </b>{contact_val.phone}
          </p>
          <p>
            <b>{contact.mail}: </b>{contact_val.mail}
          </p>
        </div>
        <div className="col-4"></div>
        <div className="col-4 logo_img" >
          <p>Logo</p>
        </div>
      </div>
    </div>
  );
};

export default FootNavBar;
