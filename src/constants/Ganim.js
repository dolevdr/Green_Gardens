import ThreeC from "../sources/3 Rooms C.jpeg";
import FourA1 from "../sources/4 Rooms A1.jpeg";
import FourA2 from "../sources/4 Rooms A2.jpeg";
import FiveB1 from "../sources/5 Rooms B1.jpeg";
import FiveB2 from "../sources/5 Rooms B2.jpeg";
import FiveD1P from "../sources/5 Rooms D1 - Penthouse.jpeg";
import FiveEP from "../sources/5 Rooms E - Penthouse + Pool.jpeg";
import FiveFP from "../sources/5 Rooms F - Penthouse + Pool.jpeg";
import SixDP from "../sources/6 Rooms D - Penthouse.jpeg";
import Gan5C from "../sources/Gan 5 - B.jpeg";
import Gan4B from "../sources/Gan 4- A.jpeg";
import floor from "../sources/floor.jpeg";
import p_h from "../sources/penthouse.jpeg";
import row from "../sources/row.jpeg";


export const ganim_specification = [
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
export const ganim_departments = [
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

export const open ={
    txt : `שכונת פארק באר שבע`,
}

export const imaging = [floor, p_h, row]

export const about = `הפרויקט ממוקם בשכונת פארק נחל באר שבע, בלב השכונה בקו הראשון לפארק ולאגם המלאכותי הגדול בישראל. בפרויקט שישה בניינים בני חמש קומות, הכוללים בין תשע לעשר דירות בכל בניין, בנות 3 חדרים, 4 חדרים, 5 חדרים, דירות גן ודירות גג (פנטהאוז) בכל קומה שתי דירות בלבד, למעט דירות הגן ודירות הפנטהאוז שהן דירות יחידות בקומה. בכל הדירות מרפסות מרווחות המשקיפות לפארק ולאגם. החניון תת קרקעי עם הכנה לעמדות טעינה לרכב חשמלי.`
export const neighborhood = `שכונת פארק נחל באר שבע, כוללת פארק עצום בגודלו עם מתקני ספורט רבים ומגוונים וטיילת המקיפה את כל הפארק, השכונה מוקפת במרכזי קניות, בילוי, תחבורה, מסחר, תעסוקה, וקרובה מאוד לכביש 6.`
   