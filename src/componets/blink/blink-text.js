import "./blink-text.css";

const BlinkingText = (props) => {
  const { text, open } = props;
  return <div className="blink_container" onClick={()=>open()}><b>{text}</b></div>;
};

export default BlinkingText;
