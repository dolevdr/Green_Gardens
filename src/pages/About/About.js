import "./About.css";
import {contact, contact_val} from '../../constants/contact';
import {company_name} from '../../constants/company';

const About = () => {
  const meir = 'מאיר בן חמו';
  const yossi = 'יוסי איטח';

  const text = `קבוצת יזמות ובנייה אשר החלה פעילותה לפני למעלה משני עשורים. מיום
  היווסדה, פעלה הקבוצה בהיקפים נרחבים בתחום הנדל"ן, ההשקעות והמסחר. מיום
  הקמתה, חרטה הקבוצה על דגלה לבנות, לנהל ולשווק פרויקטים נדלניים
  במקצועיות ובאיכות ללא פשרות, כאשר בראש ובראשונה עומדת לנגד עיניה
  שביעות הרצון של הלקוחות.`;

  return (
    <div dir="rtl" className="about_contain">
      <h1>{company_name}</h1>
      <div className="text col-12">
        <p className="col-5">{text}</p>
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
      <div className="owners"></div>

      {/* Yossi */}
      <div className="owners">
        <div className="col-6">
          <h1>{yossi}</h1>
          <p>(טקסט על יוסי)</p>
        </div>
        <div className="col-10" dir="ltr">
          (תמונה)
        </div>
      </div>
      <div className="col-6">
        <h1>{meir}</h1>
        <p>(טקסט על מאיר)</p>
      </div>
      <div className="col-10" dir="ltr">
        (תמונה)
      </div>
    </div>
  );
};

export default About;
