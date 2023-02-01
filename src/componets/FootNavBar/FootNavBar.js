import "./FootNavBar.css";

const FootNavBar = () => {
  return (
    <div dir="rtl" >
      <div className="row col-12 shadow-lg mb-5 rounded" style={{position:'relative', marginTop:'10%', backgroundColor:'lightgrey', width:'100%', float:'left'}}>

        <div className="office col-4" style={{marginTop:'2%'}}>
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
        <div className="col-4" style={{marginTop:'5%'}} >
          <p>Logo</p>
        </div>
      </div>
    </div>
  );
};

export default FootNavBar;
