import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { URL } from "../CoursesReducers/CoursesReducers"
import axios from "axios"

export const getPopularCourses = createAsyncThunk(
    "PopularCourses/getCourses",
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await axios.get(`${URL}/PopularCoursesArray`)
            return data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const PopularCourses = createSlice({
    name : "PopularCourses",
    initialState : {
        PopularCourses : [],
        isLoading : false,
        isSuccses : false,
        errorMassage : ""
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(getPopularCourses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPopularCourses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccses = true
                state.PopularCourses = action.payload
            })
            .addCase(getPopularCourses.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccses = false
                state.PopularCourses = []
                state.errorMassage = action.payload
            })
    }
})

export default PopularCourses.reducer