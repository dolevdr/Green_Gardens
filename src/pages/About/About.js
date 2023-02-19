import "./About.css";
import { contact, contact_val } from "../../constants/contact";
import { company_name } from "../../constants/company";
// import img_bg_about from '../../sources/img_bg_about.jpeg';

const About = () => {
  const meir = "מאיר בן חמו";
  // const meir_text = `(טקסט על מאיר)`;
  const yossi = "יוסי איטח";
  const yossi_txt = `יוסי איטח, יזם ואיש עסקים, בעל רקורד ניהולי ועסקי עשיר, במסגרת פעילות כיזם נדל"ן במשך למעלה משני עשורים, יזם הוביל וניהל פרויקטים רבים וגדולים למגורים, התחדשות עירונית, מסחר ותעסוקה.`;
  const meir_txt = `מאיר בן חמו, עו"ד במקצועו, בוגר תואר ראשון במשפטים, תואר ראשון בכלכלה ומינהל עסקים ותואר שני במינהל ומדיניות ציבורית. בעל ניסיון רב בתחום הפיננסי והניהולי. כיהן כסמנכ"ל כספים של רשת בתי הדיור המוגן "משען" במשך 12 שנה, מכהן כדירקטור חיצוני בשתי חברות ציבוריות בתחום הנדל"ן ובתחום הרכב, וכיהן כסגן פקיד שומה ברשות המיסים.`;
  const text = `א.ים ארץ ומלואה נדל"ן מקבוצת "מגדים" הינה קבוצת יזמות ובנייה אשר החלה פעילותה לפני למעלה משני עשורים.
  מיום היווסדה פעלה הקבוצה בהיקפים נרחבים בתחום הנדל"ן, ההשקעות והמסחר.
  מיום הקמתה, חרטה הקבוצה על דגלה לבנות, לנהל ולשווק פרויקטים נדלניים במקצועיות ובאיכות ללא פשרות, כאשר בראש ובראשונה עומדת לנגד עיניה שביעות הרצון של הלקוחות.`;

  return (
    <div dir="rtl" className="about_container">
      <div className="company_name">
        <h1 className="name_company">{company_name}</h1>
      </div>
      <div className="row">
        <div className=" col-8 f1 bg_darker rounded shadow-lg">
          <div className="owners_txt">{text}</div>
          <div className="owners ">
            <h1>{yossi}</h1>
            <div className="owners_txt">{yossi_txt}</div>
            <h1>{meir}</h1>
            <div className="owners_txt">{meir_txt}</div>
          </div>
        </div>
        <div className=" col-4 f2">
          <b>{contact.address}:</b> {contact_val.address}
          <br />
          <b>{contact.owners}:</b> {contact_val.owners}
          <br />
          <b>{contact.mail}: </b>
          {contact_val.mail}
        </div>
      </div>
    </div>

    // <div dir="rtl" className="about_contain">
    //   <div className="content ">
    //     <h1>{company_name}</h1>
    //     <div className="text col-12 ">
    //       <p className="col-6 flex-child bg_darker rounded-top">
    //         {text}
    //         <br />
    //         <br />
    //       </p>
    //       <div className="col-5 contact_marg">
    //         <b>{contact.address}:</b> {contact_val.address}
    //         <br />
    //         <b>{contact.owners}:</b> {contact_val.owners}
    //         <br />
    //         <b>{contact.phone}: </b>
    //         {contact_val.phone}
    //         <br />
    //         <b>{contact.mail}: </b>
    //         {contact_val.mail}
    //       </div>
    //     </div>

    //     <div className="owners ">
    //       <div className="col-6 bg_darker shadow-lg rounded-bottom bottom_marg">
    //         <h1>{yossi}</h1>
    //         <p>{yossi_txt}</p><br />
    //         <h1>{meir}</h1>
    //         <p>{meir_txt}</p><br />
    //       </div>
    //     </div>

    //   </div>
    // </div>
  );
};

export default About;
