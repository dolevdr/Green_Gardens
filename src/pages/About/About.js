import "./About.css";
import {contact, contact_val} from '../../constants/contact';
import {company_name} from '../../constants/company';
// import img_bg_about from '../../sources/img_bg_about.jpeg';


const About = () => {
  const meir = 'מאיר בן חמו';
  const meir_text = `(טקסט על מאיר)`;
  const yossi = 'יוסי איטח';

  const text = `קבוצת יזמות ובנייה אשר החלה פעילותה לפני למעלה משני עשורים. מיום
  היווסדה, פעלה הקבוצה בהיקפים נרחבים בתחום הנדל"ן, ההשקעות והמסחר. מיום
  הקמתה, חרטה הקבוצה על דגלה לבנות, לנהל ולשווק פרויקטים נדלניים
  במקצועיות ובאיכות ללא פשרות, כאשר בראש ובראשונה עומדת לנגד עיניה
  שביעות הרצון של הלקוחות.`;

  return (
    <div dir="rtl" className="about_contain">
      <div className="content">
        <h1>{company_name}</h1>
        <div className="text col-12 ">
          <p className="col-6 flex-child bg_darker rounded-top">{text}<br /><br /></p>
          <div className="col-5" dir="ltr" >
            <b>{contact.address}:</b> {contact_val.address}
            <br />
            <b>{contact.owners}:</b> {contact_val.owners}
            <br />
            <b>{contact.phone}: </b>{contact_val.phone}
            <br />
            {contact_val.mail}<b> :{contact.mail} </b>
          </div>
        </div>
        {/* Meir */}

        {/* Yossi */}
        <div className="owners ">
          <div className="col-5 left_f" dir="ltr">
            (תמונה)
          </div>
          <div className="col-6 bg_darker">
            <h1>{yossi}</h1>
            <p>(טקסט על יוסי)</p>
          </div>
        </div>
        <div className="col-5 left_f" dir="ltr">
          (תמונה)
        </div>
        <div className="col-6 bg_darker shadow-lg rounded-bottom bottom_marg">
          <h1>{meir}</h1>
          <p className="text_content">{meir_text}</p>
        </div>
        {/* <img src={img_bg_about} alt='ncnnc'/> */}
      </div>
    </div>
  );
};

export default About;
