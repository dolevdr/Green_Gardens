import "./Opening.css";

const Opening = (props) => {
  return (
    <div className="openingContainer">
      <img
        className="open img_obj rounded shadow-lg"
        src={props.openImg}
        alt="nothing"
      />
      <div className="openName text-center">
        <img className="open logo_open" src={props.logo} alt="nothing" />
        <h1 className="open">{props.name}</h1>
        <p className="open text_open">{props.text}</p>
      </div>
    </div>
  );
};

export default Opening;
