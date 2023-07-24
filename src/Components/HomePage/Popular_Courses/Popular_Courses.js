import { useEffect } from "react"
import { Popula_Swiper } from "./Polplar_Swiper"
import "./Popular_Courses.css"
import { useDispatch } from "react-redux"
import { getPopularCourses } from "../../redux/PopularCoursesReducers/PopularCoursesReducers"

export const Popular_Courses = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPopularCourses())
    }, [])

    return (
        <div className="Popular_Courses-App">
            <section>
                <h3>Ամենահայտնի դասընթացները</h3>
            </section>
            <Popula_Swiper />
        </div>
    )
}