import Navigate from "../../componets/proj_navigate/navigate";
import "./Project.css";
import { useState, useEffect, useRef } from "react";
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
import { BsFillHouseFill, BsDoorOpenFill } from "react-icons/bs";
import Specification from "../../componets/specification/specification";
import Imaging from "../../componets/Imaging/Imaging";
import floor from "../../sources/floor.jpeg";
// import g_y from "../../sources/Ganim Yerukim.jpeg";
import p_h from "../../sources/penthouse.jpeg";
import row from "../../sources/row.jpeg";
import loc from "../../sources/location.jpeg";


const Project = (props) => {
  const [isFixed, setIsFixed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsFixed(window.pageYOffset > ref.current.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return (
    <div style={{ direction: "rtl", position: "relative", top: "70px" }}>
      <div
        className="page"
        ref={ref}
        style={{ position: isFixed ? "fixed" : "static" , width:'11%', height:window.innerHeight}}
      >
        <Navigate 
          categories={[
            "הסבר על הפרוייקט",
            "מפרט",
            "דגמים",
            "מבט על",
            "הדמיות",
            "מיקום",
          ]}
        />
      </div>
      <div
        className="col-10 page"
        style={{ position: "relative", right: !isFixed ? "2%" : "13%" }}
      >
        <h1 className="text-center">{props.name}</h1>
        <div className="headlines" id="1">
          <h1>הסבר על הפרוייקט</h1>
          <hr />
          <p>{props.text}</p>
        </div>
        <div className="headlines" id="2">
          <h1>מפרט</h1>
          <hr />
          {props.name === "גנים ירוקים" && (
            <div>
              <Specification
                head="מטבח"
                list={[
                  "ארונות מטבח של חברת PANEL",
                  'משטח שיש קיסר או ש"ע',
                  "יחידת B.L",
                  "כיור אקרילי בהתקנה שטוחה",
                ]}
              />
              <br />
              <Specification
                head="חדרי רחצה"
                list={[
                  "אסלות תלויות ומכלי הדחה סמויים ",
                  "אמבט אקרילי",
                  "ארון אמבטיה בחדרי רחצה ",
                  "ברזי פרח",
                  "סוללה 4 דרך מקלחת הורים",
                ]}
              />
              <br />
              <Specification
                head="דלתות וחלונות"
                list={[
                  'משקופים ודלתות חמדיה/ ש"ע',
                  "דלת כניסה מעוצבת",
                  'תריס גלילה חשמלי (פרט לממ"ד, ויטרינות וחדרים רטובים ומרפסת שירות)',
                ]}
              />
              <br />
              <Specification
                head="חשמל"
                list={[
                  "חשמל תלת פאזי A3/25",
                  "נקודת TV\\TEL בכל חדר",
                  "הכנה למערכת מיזוג אוויר",
                  "הכנה לחשמל חכם",
                  "נקודת חשמל לתנור במקלחת הורים",
                  "נקודת חשמל, גז ומים במרפסת",
                ]}
              />
              <br />
              <Specification
                head="קירמיקה"
                list={["ריצוף גרניט פורצלן 80/80", "קרמיקה בקירות 60/120"]}
              />
            </div>
          )}
        </div>
        <div className="headlines" id="3">
          <h1>דגמים</h1>
          <br />
          <div>
            <BsFillHouseFill /> בית <span style={{ marginLeft: "30px" }}></span>
            <BsDoorOpenFill /> מרפסת
          </div>
          <hr />
          {props.name === "גנים ירוקים" && (
            <div>
              <div className="depFloat">
                <Department
                  name="3 חדרים"
                  type="C"
                  pic={ThreeC}
                  house="74 מטרים"
                  porch="16 מטרים"
                />
                
              </div>
              <div className="depFloat">
                <Department
                  name="4 חדרים"
                  type="A1"
                  pic={FourA1}
                  house="104 מטרים"
                  porch="19 מטרים"
                />
              </div>
              <div className="depFloat">
                <Department
                  name="4 חדרים"
                  type="A2"
                  pic={FourA2}
                  house="104 מטרים"
                  porch="19 מטרים"
                />
              </div>
              <div className="depFloat">
                <Department
                  name="5 חדרים"
                  type="B1"
                  pic={FiveB1}
                  house="120 מטרים"
                  porch="21 מטרים"
                />
              </div>
              <div className="depFloat">
                <Department
                  name="5 חדרים"
                  type="B2"
                  pic={FiveB2}
                  house="120 מטרים"
                  porch="21 מטרים"
                />
              </div>
              <div className="depFloat">
                <Department
                  name="פנטהאוז 5 חדרים"
                  type="D1"
                  pic={FiveD1P}
                  house="120 מטרים"
                  porch="21 מטרים"
                />
              </div>
              <div className="depFloat">
                <Department
                  name="פנטהאוז 5 חדרים"
                  type="E"
                  pic={FiveEP}
                  house="120 מטרים"
                  porch="21 מטרים"
                />
              </div>
              <div className="depFloat">
                <Department
                  name="פנטהאוז 5 חדרים"
                  type="F"
                  pic={FiveFP}
                  house="120 מטרים"
                  porch="21 מטרים"
                />
              </div>
              <div className="depFloat">
                <Department
                  name="פנטהאוז 6 חדרים"
                  type="D"
                  pic={SixDP}
                  house="120 מטרים"
                  porch="21 מטרים"
                />
              </div>
            </div>
          )}
        </div>
        <div className="headlines" id="4">
          <h1>מבט על</h1>
          <hr />
          {props.name==='גנים ירוקים' &&
            <div className="text-center"><img  style={{position:'relative', top:'-10px', width:'100%'}} src={row} alt='nothing'/></div>
          }
        </div>
        <div className="headlines" id="5">
          <h1>הדמיות</h1>
          <hr />
          {props.name==='גנים ירוקים' &&
            <Imaging images={[floor, p_h]}/>

          }
        </div>
        <div className="headlines" id="6">
          <h1>מיקום</h1>
          <hr />
          <div className="text-center"><img  style={{position:'relative', top:'-10px', width:'100%'}} src={loc} alt='nothing'/></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
