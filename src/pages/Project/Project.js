import Navigate from "../../componets/proj_navigate/navigate";
import "./Project.css";
import { useState, useEffect, useRef } from 'react';


const Project = (props) => {

    const [isFixed, setIsFixed] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          setIsFixed(window.pageYOffset > ref.current.offsetTop);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [ref]);


  return (
    <div style={{ direction: "rtl", position: "relative", top: "70px" }}>
      <div className="page" ref={ref} style={{ position: isFixed ? 'fixed' : 'static' }}>
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
      <div className="col-10 page" style={{position:"relative", right:!isFixed ? "20px" : "12%"}}>
        <h1 className="text-center">{props.name}</h1>
        <div className="headlines" id="1">
          <h1>הסבר על הפרוייקט</h1>
          <hr />
          <p>{props.text}</p>
        </div>
        <div className="headlines" id="2">
          <h1>מפרט</h1>
          <hr />
          <p>מפרט</p>
        </div>
        <div className="headlines" id="3">
          <h1>דגמים</h1>
          <hr />
          <p>דגמים</p>
        </div>
        <div className="headlines" id="4">
          <h1>מבט על</h1>
          <hr />
          <p>תמונה ממבט על</p>
        </div>
        <div className="headlines" id="5">
          <h1>הדמיות</h1>
          <hr />
          <p>תמונות מזוויות שונות</p>
        </div>
        <div className="headlines" id="6">
          <h1>מיקום</h1>
          <hr />
          <p>תמונת מיקום</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
