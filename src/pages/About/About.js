import "./About.css";

const About = () => {
  const text = `קבוצת יזמות ובנייה אשר החלה פעילותה לפני למעלה משני עשורים. מיום
  היווסדה, פעלה הקבוצה בהיקפים נרחבים בתחום הנדל"ן, ההשקעות והמסחר. מיום
  הקמתה, חרטה הקבוצה על דגלה לבנות, לנהל ולשווק פרויקטים נדלניים
  במקצועיות ובאיכות ללא פשרות, כאשר בראש ובראשונה עומדת לנגד עיניה
  שביעות הרצון של הלקוחות.`;

  return (
    <div dir="rtl" className="about_contain">
      <h1>א.ים מקבוצת מגדים</h1>
      <div className="text col-12">
        <p className="col-5">{text}</p>
        <div className="col-5" dir="ltr" >
          <b>כתובת:</b> סמילנסקי 26, באר שבע
          <br />
          <b>בעלים:</b> יוסי איטח ומאיר בן חמו
          <br />
          <b>טלפון: </b>08-6666666
          <br />
          office@gmail.com<b> :דוא"ל </b>
        </div>
      </div>
      {/* Meir */}
      <div className="owners"></div>

      {/* Yossi */}
      <div className="owners">
        <div className="col-6">
          <h1>יוסי איטח</h1>
          <p>(טקסט על יוסי)</p>
        </div>
        <div className="col-10" dir="ltr">
          (תמונה)
        </div>
      </div>
      <div className="col-6">
        <h1>מאיר בן חמו</h1>
        <p>(טקסט על מאיר)</p>
      </div>
      <div className="col-10" dir="ltr">
        (תמונה)
      </div>
    </div>
  );
};

export default About;
