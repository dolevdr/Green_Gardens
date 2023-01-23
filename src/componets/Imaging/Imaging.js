import "./Imaging.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
const Imaging = (props) => {
    
  return (
    <div className="text-center" style={{width:'100%'}}>
      <Swiper 
        navigation={true}
        pagination={{type: "fraction"}}
        modules = {[Pagination, Navigation]}
      >
        {
            props.images.map((v,i)=>(
                <SwiperSlide style={{position:'relative', top:'-300px'}} key={i}><img style={{width:'100%' }} src={v} alt='no img'/></SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};

export default Imaging;
