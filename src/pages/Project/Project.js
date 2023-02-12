import Navigate from "../../componets/proj_navigate/navigate";
import "./Project.css";
import Department from "../../componets/Department/Department";
import ThreeC from "../../sources/3 Rooms C.jpeg";
import FourA1 from "../../sources/4 Rooms A1.jpeg";
import FourA2 from "../../sources/4 Rooms A2.jpeg";
import FiveB1 from "../../sources/5 Rooms B1.jpeg";
import FiveB2 from "../../sources/5 Rooms B2.jpeg";
import FiveD1P from "../../sources/5 Rooms D1 - Penthouse.jpeg";
import FiveEP from "../../sources/5 Rooms E - Penthouse + Pool.jpeg";
import FiveFP from "../../sources/5 Rooms F - Penthouse + Pool.jpeg";
import SixDP from "../../sources/6 Rooms D - Penthouse.jpeg";
import { BsFillHouseFill} from "react-icons/bs";
import {MdBalcony, MdYard }from "react-icons/md";
import Specification from "../../componets/specification/specification";
import Imaging from "../../componets/Imaging/Imaging";
import floor from "../../sources/floor.jpeg";
import p_h from "../../sources/penthouse.jpeg";
import row from "../../sources/row.jpeg";
import loc from "../../sources/location.jpeg";
import mabatAl from "../../sources/Mabat Al.jpeg";
import neighborhood from "../../sources/Neighborhood.jpeg";
import Gan5C from "../../sources/Gan 5 - B.jpeg";
import Gan4B from "../../sources/Gan 4- A.jpeg";

import { nav_subjects } from "../../constants/projects";

const Project = (props) => {
  const subjects = Object.values(nav_subjects);
  const name = `גנים ירוקים`;
  const specification = [
    {
      head: "מטבח",
      items: [
        "ארונות מטבח של חברת PANEL",
        'משטח שיש קיסר או ש"ע',
        "יחידת B.L",
        "כיור אקרילי בהתקנה שטוחה",
      ],
    },
    {
      head: "חדרי רחצה",
      items: [
        "אסלות תלויות ומכלי הדחה סמויים ",
        "אמבט אקרילי",
        "ארון אמבטיה בחדרי רחצה ",
        "ברזי פרח",
        "סוללה 4 דרך מקלחת הורים",
      ],
    },
    {
      head: "דלתות וחלונות",
      items: [
        'משקופים ודלתות חמדיה/ ש"ע',
        "דלת כניסה מעוצבת",
        'תריס גלילה חשמלי (פרט לממ"ד, ויטרינות וחדרים רטובים ומרפסת שירות)',
      ],
    },
    {
      head: "חשמל",
      items: [
        "חשמל תלת פאזי A3/25",
        "נקודת TV\\TEL בכל חדר",
        "הכנה למערכת מיזוג אוויר",
        "הכנה לחשמל חכם",
        "נקודת חשמל לתנור במקלחת הורים",
        "נקודת חשמל, גז ומים במרפסת",
      ],
    },
    {
      head: "קרמיקה",
      items: ["ריצוף גרניט פורצלן 80/80", "קרמיקה בקירות 60/120"],
    },
  ];
  const departments = [
    {
      name: "3 חדרים",
      type: "C",
      pic: ThreeC,
      house: "77 מטרים",
      porch: "16 מטרים",
    },
    {
      name: "4 חדרים",
      type: "A1",
      pic: FourA1,
      house: "104 מטרים",
      porch: "19 מטרים",
    },
    {
      name: "4 חדרים - מיני פנטהאוז",
      type: "A2",
      pic: FourA2,
      house: "104 מטרים",
      porch: "35 מטרים",
    },
    {
      name: "4 חדרים - גן",
      type: "B",
      pic: Gan4B,
      house: "104 מטרים",
      garden: "70 מטרים",
    },

    {
      name: "5 חדרים",
      type: "B1",
      pic: FiveB1,
      house: "120 מטרים",
      porch: "21 מטרים",
    },
    {
      name: "5 חדרים - מיני פנטהאוז",
      type: "B2",
      pic: FiveB2,
      house: "120 מטרים",
      porch: "40 מטרים",
    },
    {
      name: "5 חדרים - גן",
      type: "C",
      pic: Gan5C,
      house: "120 מטרים",
      garden: "180 מטרים",
    },
    {
      name: "5 חדרים - פנטהאוז",
      type: "D1",
      pic: FiveD1P,
      house: "140 מטרים",
      porch: "50 מטרים",
    },
    {
      name: "5 חדרים - פנטהאוז",
      type: "E",
      pic: FiveEP,
      house: "142 מטרים",
      porch: "120 מטרים",
    },
    {
      name: "5 חדרים - פנטהאוז",
      type: "F",
      pic: FiveFP,
      house: "141 מטרים",
      porch: "110 מטרים",
    },
    {
      name: "6 חדרים - פנטהאוז",
      type: "D",
      pic: SixDP,
      house: "157 מטרים",
      porch: "80 מטרים",
    },
  ];

  return (
    <div dir="rtl" className="project_container">
      <div className="page">
        <Navigate categories={subjects} />
      </div>
      <div className="col-10 pageLeft">
        <h1 className="text-center">{props.name}</h1>
        <div className="headlines" id="1">
          <h1>{nav_subjects.explanation}</h1>
          <hr />
          <p>{props.text}</p>
        </div>
        <div className="headlines" id="2">
          <h1>{nav_subjects.specification}</h1>
          <hr />
          {props.name === name && (
            <div>
              {specification.map((val, ind) => (
                <div key={ind}>
                  {" "}
                  <Specification head={val.head} list={val.items} />
                  <br />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="headlines" id="3">
          <h1>{nav_subjects.imaging}</h1>
          <br />
          <div>
            <BsFillHouseFill /> בית <span className="home_icon"></span>
            <MdBalcony /> מרפסת <span className="home_icon"></span>
            <MdYard /> גינה
          </div>
          <hr />
          {props.name === name && (
            <div>
              {departments.map((val, ind) => (
                <div type={ind} className="depFloat">
                  {val.porch ? (
                    <Department
                      name={val.name}
                      type={val.type}
                      pic={val.pic}
                      house={val.house}
                      porch={val.porch}
                    />
                  ) : (
                    <Department
                      name={val.name}
                      type={val.type}
                      pic={val.pic}
                      house={val.house}
                      garden={val.garden}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="headlines" id="4">
          <h1>{nav_subjects.above}</h1>
          <hr />
          {props.name === name && (
            <div className="text-center">
              <img className="img_above" src={mabatAl} alt="nothing" />
            </div>
          )}
        </div>
        <div className="headlines" id="5">
          <h1>{nav_subjects.imaging}</h1>
          <hr />
          {props.name === name && (
            <Imaging images={[floor, p_h, row, neighborhood]} />
          )}
        </div>
        <div className="headlines" id="6">
          <h1>{nav_subjects.location}</h1>
          <hr />
          {props.name === name && (
            <div className="text-center">
              <img className="img_loc" src={loc} alt="nothing" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
