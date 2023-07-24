import "./Platform.css"
import { Platform_Swiper } from "./Platform_Swiper"




export const Platform = () => {
    return (
        <div className="Platform-App">
            <section>
                <h3>Մեր Հարթակը</h3>
            </section>
            <div className="Platform-Slider">
                <Platform_Swiper />
            </div>
        </div>
    )
}