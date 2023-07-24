import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const URL = "http://localhost:8080"

export const getCourses = createAsyncThunk(
    "Courses/getCourses",
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await axios.get(`${URL}/coursesarray`)
            return data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)





export const CoursesReducers = createSlice({
    name : "CoursesReducers",
    initialState : {
        CoursesData : [],
        isLoading : false,
        isSuccses : false,
        errorMassage : ""
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(getCourses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccses = true
                state.CoursesData = action.payload
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccses = false
                state.CoursesData = []
                state.errorMassage = action.payload
            })
    }
})

export default CoursesReducers.reducer