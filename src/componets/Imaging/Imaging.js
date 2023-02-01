import "./Imaging.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
const Imaging = (props) => {
    
  return (
    <div className="text-center contain_imaging" >
      <Swiper 
        navigation={true}
        pagination={{type: "fraction"}}
        modules = {[Pagination, Navigation]}
      >
        {
            props.images.map((v,i)=>(
                <SwiperSlide className="swiper" key={i}><img className="swiper_img" src={v} alt='no img'/></SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};

export default Imaging;
