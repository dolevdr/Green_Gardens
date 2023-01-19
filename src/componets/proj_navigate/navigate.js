import "./navigate.css";


const Navigate = (props) => {
  return (
    <div id='n' style={{ direction: "rtl", width:'100%', height:'600px' }}>
      {props.categories.map((val, ind) => (
        <a
          style={{ display: "block" }}
          className="border border-black"
          href={"#" + (ind + 1)}
        >
          {" "}
          {val}{" "}
        </a>
      ))}
    </div>
  );
};

export default Navigate;
