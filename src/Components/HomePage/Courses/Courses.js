import { useEffect } from "react"
import "./Courses.css"
import Swiper from "./Swiper"
import { useDispatch, useSelector} from "react-redux"
import { getCourses } from "../../redux/CoursesReducers/CoursesReducers"

export const Courses = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCourses())
    }, [])

    return (
        <div className="Courses-App">
            <div className="container">
                <section>
                    <h3>
                        Հիմա երբ արդեն անցել ես ընդհանուր թեստը մենք կարող ենք առաջարկել քեզ դասընթացներ
                    </h3>
                </section>
            </div>
            <div className="Courses-Slider">
                <Swiper />
            </div>
        </div>
    )
}