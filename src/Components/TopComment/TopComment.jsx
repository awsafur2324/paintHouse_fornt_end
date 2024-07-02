import CommentCard from "./CommentCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const TopComment = () => {
  const [comments, setComment] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/Comments")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold font-display4 text-center">
        Top <span className="text-green-700">Comments</span>
      </h1>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper border-none mt-10"
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <CommentCard comment={comment} setLoad={setLoad}></CommentCard>
          </SwiperSlide>
        ))}
        {/* doing this load for autoplay error */}
        {load && <SwiperSlide />}
        
      </Swiper>

    </div>
  );
};

export default TopComment;
