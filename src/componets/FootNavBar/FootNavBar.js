import { contact, contact_val } from "../../constants/contact";
import "./FootNavBar.css";
import { headers, routes } from "../../constants/nav_bar";
import { company_name } from "../../constants/company";
import { useNavigate } from "react-router";

const FootNavBar = (props) => {
  const navigate = useNavigate();

  const office = "המשרד שלנו";
  const projects = "projects";
  const headers_names = Object.keys(headers);
  return (
    <footer
      dir="rtl"
      className="row col-12 shadow-lg rounded contain_navbar text-center"
    >
      <div className="col-4 navigateFl">
        {headers_names.map((val, ind) => (
          <div className="text-center contain_menu">
            {val === projects ? (
              Object.keys(headers[val]).map((value, index) => (
                <p
                  onClick={() => navigate(routes[val][value])}
                  className="po"
                  key={index}
                >
                  {headers[val][value]}
                </p>
              ))
            ) : (
              <p onClick={() => navigate(routes[val])} className="po" key={ind}>
                {headers[val]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="col-4 body_foot">
        <p>
          <u>{office}</u>:{" "}
        </p>
        <p>
          <b>{contact.address}: </b>
          {contact_val.address}
        </p>
        <p>
          <b>{contact.phone}: </b>
          {contact_val.phone}
        </p>
        <p>
          <b>{contact.mail}: </b>
          {contact_val.mail}
        </p>
      </div>
      <div className="col-4 logo_img">
        <img className="imageLogo text-center" src={props.logo} alt="nothing" />
        <p>
          <b>{company_name}</b>
        </p>
      </div>
    </footer>
  );
};

export default FootNavBar;
