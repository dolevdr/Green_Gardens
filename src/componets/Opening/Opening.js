import "./Opening.css";

const Opening = (props) => {
  return (
    <div className="openingContainer">
      <img
        className="open col-8 rounded shadow-lg"
        src={props.openImg}
        alt="nothing"
      />
      <div className="openName col-4 open text-center">
        <img className=" logo_open" src={props.logo} alt="nothing" /><br />
        <h1 className="">{props.name}</h1>
        <p className=" text_open">{props.text}</p>
      </div>
    </div>
  );
};

export default Opening;
