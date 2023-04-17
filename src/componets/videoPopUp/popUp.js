import "./popUp.css";
import video_calcalist from '../../sources/video_calcalist.mp4';
const PopUp = (props) => {
  return (
    <div className="Popup">
        <span className="X" onClick={()=>props.changeOpen(false)}>X</span>
        <video width={'100%'} height={'100%'} controls>
            <source src={video_calcalist} type="video/mp4"/>
        </video>
    </div>
  );
};

export default PopUp;
