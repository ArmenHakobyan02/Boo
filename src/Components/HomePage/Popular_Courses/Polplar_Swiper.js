import { Swiper, SwiperSlide } from "swiper/react";
import English from "../../../img/English.jpg"
import Grafik_Dizayn from "../../../img/Grafik-Dizayn.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { useSelector } from "react-redux";


export const Popula_Swiper = () => {

    const {PopularCourses} = useSelector(state => state.PopularCoursesReducers)

    return (
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
                PopularCourses?.map((item) => {
                    return (
                        <SwiperSlide key={item.id} >
                            <div className="Popular_item">
                                <img src={item.img} alt="Popular-Images" />
                                <div style={{ backgroundColor: item.color }} className="Popular_Courses-items">
                                    <h4>{item.CoursesName}</h4>
                                    <h5>{item.count} սովորող</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}