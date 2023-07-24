import { configureStore } from "@reduxjs/toolkit";
import CoursesReducers from "./CoursesReducers/CoursesReducers";
import PopularCoursesReducers from "./PopularCoursesReducers/PopularCoursesReducers";

export const store = configureStore({
    reducer : {
        CoursesReducers,
        PopularCoursesReducers
    }
})