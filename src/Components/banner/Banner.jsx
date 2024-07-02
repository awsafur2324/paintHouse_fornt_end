// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerItem from "./BannerItem";
import './banner.css'

import bg from '../../assets/Img/banner/Creative Portfolio.jpg'
import banner from '../../assets/Img/banner/banner.png'
import banner1 from '../../assets/Img/banner/banner1.png'
import banner2 from '../../assets/Img/banner/banner2.png'

const Banner = () => {
  const bgImg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" ,
    width : "100%"
  };
  return (
    <div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       autoplay={{
         delay: 10000,
         disableOnInteraction: false,
       }}
       navigation={true}
       modules={[Autoplay, Navigation]}
       className="mySwiper mt-0 z-0 w-full"
       style={bgImg}
      >
        <SwiperSlide><BannerItem states={false} img={banner} header={'We provide the best collection of Painting and Drawing'} details={'Here we have various type of painting and drawing collection. You can find your dream printing on a cheap price'}/></SwiperSlide>
        <SwiperSlide><BannerItem states={true} img={banner1} header={'We sell the top of the town drawing collection'} details={'The collection of us is the best collection of the country. We collect from the specific famous artists'}/></SwiperSlide>
        <SwiperSlide><BannerItem states={false} img={banner2} header={'We always focus to improve the buying and selling process'} details={'Here you set a buyer and seller policy with a wonderful refund and all time customer care service.'}/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
