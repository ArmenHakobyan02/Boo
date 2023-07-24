import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { useSelector } from "react-redux";

export default function App() {

  const { CoursesData } = useSelector(state => state.CoursesReducers)

  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        className="mySwiper"
      >
        {
          CoursesData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="Slider-Items">
                <div className="Slider-Item" style={{ backgroundColor: item.color }}>
                  <h4>{item.Courses}</h4>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
