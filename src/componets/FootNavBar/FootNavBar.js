import "./FootNavBar.css";

const FootNavBar = () => {
  return (
    <div dir="rtl" >
      <div className="row col-12 shadow-lg mb-5 rounded contain_navbar" >

        <div className="office col-4 body_foot" >
          <p>
            <u>המשרד שלנו</u>:{" "}
          </p>
          <br />
          <p>
            <b>כתובת: </b>באר שבע
          </p>
          <p>
            <b>טלפון: </b>111111111111
          </p>
          <p>
            <b>מייל: </b>benhamomeir@gmail.com
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
