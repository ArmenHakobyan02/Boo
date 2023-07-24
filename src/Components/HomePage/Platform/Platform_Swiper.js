import { Swiper, SwiperSlide } from "swiper/react";
import twoGril from "../../../img/two-girl.jpg"
import nkar from "../../../img/gril.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const PlatformArray = [
    {
        id: Math.random(),
        img: twoGril,
        text: "Շատ մարդիկ լրացնում են իրենց գիտելիքների պաշարը, բացահայտում նոր ոլորտներ, համեմատում իրենց վարկանիշը և հաղորդակցվում իրար հետ այս ինտելեկտուալ հարթակում"
    },
    {
        id: Math.random(),
        img: twoGril,
        text: "Շատ մարդիկ լրացնում են իրենց գիտելիքների պաշարը, բացահայտում նոր ոլորտներ, համեմատում իրենց վարկանիշը և հաղորդակցվում իրար հետ այս ինտելեկտուալ հարթակում"
    },
    {
        id: Math.random(),
        img: twoGril,
        text: "Շատ մարդիկ լրացնում են իրենց գիտելիքների պաշարը, բացահայտում նոր ոլորտներ, համեմատում իրենց վարկանիշը և հաղորդակցվում իրար հետ այս ինտելեկտուալ հարթակում"
    },
    {
        id: Math.random(),
        img: nkar,
        text: "Շատ մարդիկ լրացնում են իրենց գիտելիքների պաշարը, բացահայտում նոր ոլորտներ, համեմատում իրենց վարկանիշը և հաղորդակցվում իրար հետ այս ինտելեկտուալ հարթակում"
    }
]


export const Platform_Swiper = () => {
    return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
        >
            {
                PlatformArray?.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className="Images-item" style={{ backgroundImage: `url( ${item.img} )` }} >{item.text}</div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}