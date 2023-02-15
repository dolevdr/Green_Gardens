import Navigate from "../../componets/proj_navigate/navigate";
import "./Project.css";
import Department from "../../componets/Department/Department";

import { BsFillHouseFill } from "react-icons/bs";
import { MdBalcony, MdYard } from "react-icons/md";
import Specification from "../../componets/specification/specification";
import Imaging from "../../componets/Imaging/Imaging";
import { nav_subjects } from "../../constants/projects";
import Opening from "../../componets/Opening/Opening";

const Project = (props) => {
  const subjects = Object.values(nav_subjects);
  const {
    name,
    text,
    openImg,
    specification,
    department,
    logo,
    open,
    above,
    imaging,
    location,
  } = props;

  return (
    <div dir="rtl" className="project_container">
      <div className="page">
        <Navigate categories={subjects} />
      </div>
      <div className="col-10 pageLeft">
        <div className="text-center">
          {open && (
            <Opening
              name={name}
              openImg={openImg}
              logo={logo}
              text={open.txt}
            />
          )}
        </div>
        <div className="headlines" id="1">
          <h1>{nav_subjects.explanation}</h1>
          <hr />
          {text && <p>{text}</p>}
        </div>
        <div className="headlines" id="2">
          <h1>{nav_subjects.specification}</h1>
          <hr />
          <div>
            {specification &&
              specification.map((val, ind) => (
                <div key={ind} className="spec_marg">
                  {" "}
                  <Specification head={val.head} list={val.items} />
                </div>
              ))}
          </div>
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
            {department &&
              department.map((val, ind) => (
                <div key={ind} className="depFloat">
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
        <div className="headlines" id="4">
          <h1>{nav_subjects.above}</h1>
          <hr />
          <div className="text-center">
            {above && <img className="img_above" src={above} alt="nothing" />}
          </div>
        </div>
        <div className="headlines" id="5">
          <h1>{nav_subjects.imaging}</h1>
          <hr />
          {imaging && <Imaging images={imaging} />}
        </div>
        <div className="headlines" id="6">
          <h1>{nav_subjects.location}</h1>
          <hr />
          <div className="text-center">
            {location && (
              <img className="img_loc" src={location} alt="nothing" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
